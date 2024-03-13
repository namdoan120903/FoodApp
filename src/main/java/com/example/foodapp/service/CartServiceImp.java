package com.example.foodapp.service;

import com.example.foodapp.model.Cart;
import com.example.foodapp.model.CartItem;
import com.example.foodapp.model.Food;
import com.example.foodapp.model.User;
import com.example.foodapp.repository.CartItemRepository;
import com.example.foodapp.repository.CartRepository;
import com.example.foodapp.repository.FoodRepository;
import com.example.foodapp.request.AddCartItemRequest;
import java.util.Optional;
import org.hibernate.annotations.SecondaryRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImp implements CartService{
  @Autowired
  private CartRepository cartRepository;
  @Autowired
  private CartItemRepository cartItemRepository;
  @Autowired
  private UserService userService;
  @Autowired
  private FoodService foodService;

  @Override
  public Cart addItemToCart(AddCartItemRequest request, User user) throws Exception {
    Food food = foodService.findFoodById(request.getFoodId());
    Cart cart = cartRepository.findByCustomerId(user.getId());
    //if the food exist in the cart
    for(CartItem cartItem : cart.getItem()){
      if(cartItem.getFood().equals(food)){
        int newQuantity = cartItem.getQuantity() + request.getQuantity();
        return updateCartItemQuantity(cartItem.getId(), newQuantity, user);
      }
    }
    CartItem cartItem = new CartItem();
    cartItem.setCart(cart);
    cartItem.setFood(food);
    cartItem.setQuantity(request.getQuantity());
    cartItem.setIngredients(request.getIngredientsItems());
    cartItem.setTotalPrice(request.getQuantity() * food.getPrice());

    CartItem saveCartItem = cartItemRepository.save(cartItem);
    cart.getItem().add(saveCartItem);
    cart.setTotal(calculateCartTotals(cart));
    return cart;
  }
  //update cartItem then cascade auto update cart
  @Override
  public Cart updateCartItemQuantity(Long cartItemId, int quantity, User user) throws Exception {
    Optional<CartItem> optionalCartItem = cartItemRepository.findById(cartItemId);
    if(optionalCartItem.isEmpty()) throw new Exception("cart item  not found ");
    CartItem cartItem = optionalCartItem.get();
    cartItem.setQuantity(quantity);
    cartItem.setTotalPrice(cartItem.getFood().getPrice() * quantity);
    cartItemRepository.save(cartItem);
    Cart cart = cartRepository.findByCustomerId(user.getId());
    cart.setTotal(calculateCartTotals(cart));
    return cart;
  }

  @Override
  public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Cart cart = cartRepository.findByCustomerId(user.getId());
    Optional<CartItem> optionalCartItem = cartItemRepository.findById(cartItemId);
    if(optionalCartItem.isEmpty()) throw new Exception("cart item  not found ");
    CartItem cartItem = optionalCartItem.get();
    cart.getItem().remove(cartItem);//because of remove cartItem so cartItem is deleted in the database
    cart.setTotal(calculateCartTotals(cart));
    return cartRepository.save(cart);
  }

  @Override
  public Long calculateCartTotals(Cart cart) throws Exception {
    Long total = 0L;
    for (CartItem cartItem : cart.getItem()){
      total += cartItem.getTotalPrice();
    }
    return total;
  }

  @Override
  public Cart findCartById(Long id) throws Exception {
    Optional<Cart> cart = cartRepository.findById(id);
    if (cart.isEmpty()) throw new Exception("cart not found");
    return cart.get();
  }

  @Override
  public Cart findCartByUserId(Long userId) throws Exception {
    Cart cart =  cartRepository.findByCustomerId(userId);
    cart.setTotal(calculateCartTotals(cart));
    return cart;
  }

  @Override
  public Cart clearCart(Long userId) throws Exception {
    Cart cart = findCartByUserId(userId);
    cart.getItem().clear();
    return cartRepository.save(cart);
  }
}
