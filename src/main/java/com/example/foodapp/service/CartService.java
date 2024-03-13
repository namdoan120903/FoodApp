package com.example.foodapp.service;

import com.example.foodapp.model.Cart;
import com.example.foodapp.model.CartItem;
import com.example.foodapp.model.User;
import com.example.foodapp.request.AddCartItemRequest;

public interface CartService {
  public Cart addItemToCart(AddCartItemRequest request, User user) throws Exception;
  public Cart updateCartItemQuantity(Long cartItemId, int quantity, User user) throws Exception;
  public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception;
  public Long calculateCartTotals(Cart cart) throws Exception;
  public Cart findCartById(Long id) throws Exception;
  public Cart findCartByUserId(Long userId) throws Exception;
  public Cart clearCart(Long userId) throws Exception;
}
