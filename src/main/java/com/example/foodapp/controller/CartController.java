package com.example.foodapp.controller;

import com.example.foodapp.model.Cart;
import com.example.foodapp.model.CartItem;
import com.example.foodapp.model.User;
import com.example.foodapp.request.AddCartItemRequest;
import com.example.foodapp.request.UpdateCartItemRequest;
import com.example.foodapp.service.CartService;
import com.example.foodapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CartController {
  @Autowired
  private CartService cartService;
  @Autowired
  private UserService userService;
  @PutMapping ("/cart/add")
  public ResponseEntity<Cart> addItemToCart(@RequestBody AddCartItemRequest request,
      @RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Cart cart = cartService.addItemToCart(request, user);
    return new ResponseEntity<>(cart, HttpStatus.CREATED);
  }
  @PutMapping("/cart-item/update")
  public ResponseEntity<Cart> updateCartItemQuantity(@RequestBody UpdateCartItemRequest request,
      @RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Cart cart = cartService.updateCartItemQuantity(request.getCartItemId(),
        request.getQuantity(), user);
    return new ResponseEntity<>(cart, HttpStatus.OK);
  }
  @DeleteMapping ("/cart-item/{id}/remove")
  public ResponseEntity<Cart> removeCartItem(@PathVariable Long id,
      @RequestHeader("Authorization") String jwt) throws Exception {
    Cart cart = cartService.removeItemFromCart(id, jwt);
    return new ResponseEntity<>(cart, HttpStatus.OK);
  }
  @PutMapping ("/cart/clear")
  public ResponseEntity<Cart> clearCart(@RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Cart cart = cartService.clearCart(user.getId());
    return new ResponseEntity<>(cart, HttpStatus.OK);
  }
  @GetMapping("/cart")
  public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Cart cart = cartService.findCartByUserId(user.getId());
    return new ResponseEntity<>(cart, HttpStatus.OK);
  }
}
