package com.example.foodapp.service;

import com.example.foodapp.model.Order;
import com.example.foodapp.model.User;
import com.example.foodapp.request.OrderRequest;
import java.util.List;
import org.aspectj.weaver.ast.Or;

public interface OrderService {
  public Order createOrder(OrderRequest request, User user) throws Exception;
  public Order updateOrder(Long orderId, String orderStatus) throws Exception;
  public void cancelOrder(Long orderId) throws Exception;
  public List<Order> getUserOrder(Long userId) throws Exception;
  public List<Order> getRestaurantOrder(Long restaurantId, String orderStatus) throws Exception;
  public Order findOrderById(Long orderId) throws Exception;

}
