package com.example.foodapp.controller;

import com.example.foodapp.config.JwtProvider;
import com.example.foodapp.model.Cart;
import com.example.foodapp.model.USER_ROLE;
import com.example.foodapp.model.User;
import com.example.foodapp.repository.CartRepository;
import com.example.foodapp.repository.UserRepository;
import com.example.foodapp.request.LoginRequest;
import com.example.foodapp.response.AuthResponse;
import com.example.foodapp.service.CustomerUserDetailsService;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private CartRepository cartRepository;
  @Autowired
  private JwtProvider jwtProvider;
  @Autowired
  private CustomerUserDetailsService customerUserDetailsService;
  @Autowired
  private PasswordEncoder passwordEncoder;

  @PostMapping("/signup")
  public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {
    User isEmailExist = userRepository.findByEmail(user.getEmail());
    if (isEmailExist != null){
      throw  new Exception("Email is already used with another account");
    }
    User createdUser = new User();
    createdUser.setEmail(user.getEmail());
    createdUser.setFullName(user.getFullName());
    createdUser.setRole(user.getRole());
    createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
    User savedUser = userRepository.save(createdUser);

    Cart cart = new Cart();
    cart.setCustomer(savedUser);
    cartRepository.save(cart);

    Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);

    String jwt = jwtProvider.generateToken(authentication);

    AuthResponse authResponse = new AuthResponse();
    authResponse.setMessage("Register success");
    authResponse.setRole(savedUser.getRole());
    authResponse.setJwt(jwt);
    return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
  }

  @PostMapping("/signin")
  public ResponseEntity<AuthResponse> signIn(@RequestBody LoginRequest loginRequest){
    String username = loginRequest.getEmail();
    String password = loginRequest.getPassword();

    Authentication authentication = authenticate(username, password);
    String jwt = jwtProvider.generateToken(authentication);

    Collection<?extends GrantedAuthority> authorities = authentication.getAuthorities();
    String role = authorities.isEmpty()?null:authorities.iterator().next().getAuthority();

    AuthResponse authResponse = new AuthResponse();
    authResponse.setMessage("Login success");
    authResponse.setRole(USER_ROLE.valueOf(role));
    authResponse.setJwt(jwt);
    return new ResponseEntity<>(authResponse, HttpStatus.OK);
  }

  private Authentication authenticate(String username, String password) {
    UserDetails userDetails = customerUserDetailsService.loadUserByUsername(username);
    if(userDetails == null){
      throw new BadCredentialsException("invalid user");
    }
    if(!passwordEncoder.matches(password, userDetails.getPassword())){
      throw new BadCredentialsException("invalid password");
    }
    return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
  }
}
