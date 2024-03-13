package com.example.foodapp.service;

import com.example.foodapp.model.Address;
import com.example.foodapp.model.Cart;
import com.example.foodapp.model.CartItem;
import com.example.foodapp.model.Order;
import com.example.foodapp.model.OrderItem;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.model.User;
import com.example.foodapp.repository.AddressRepository;
import com.example.foodapp.repository.OrderItemRepository;
import com.example.foodapp.repository.OrderRepository;
import com.example.foodapp.repository.UserRepository;
import com.example.foodapp.request.OrderRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import org.antlr.v4.runtime.atn.SemanticContext.OR;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImp implements OrderService{
  @Autowired
  private OrderRepository orderRepository;
  @Autowired
  private OrderItemRepository orderItemRepository;
  @Autowired
  private AddressRepository addressRepository;
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private RestaurantService restaurantService;
  @Autowired
  private CartService cartService;
  @Override
  public Order createOrder(OrderRequest request, User user) throws Exception {
    Address shipAddress = request.getDeliveryAddress();
    Address saveAddress = addressRepository.save(shipAddress);
    if(!user.getAddresses().contains(saveAddress)){
      user.getAddresses().add(saveAddress);
      userRepository.save(user);
    }
    Restaurant restaurant = restaurantService.findRestaurantById(request.getRestaurantId());
    Order order = new Order();
    order.setCustomer(user);
    order.setCreatedAt(new Date());
    order.setOrderStatus("PENDING");
    order.setRestaurant(restaurant);
    order.setDeliveryAddress(saveAddress);

    Cart cart = cartService.findCartByUserId(user.getId());
    List<OrderItem> orderItems = new ArrayList<>();
    for(CartItem cartItem : cart.getItem()){
      OrderItem orderItem = new OrderItem();
      orderItem.setFood(cartItem.getFood());
      orderItem.setIngredients(cartItem.getIngredients());
      orderItem.setQuantity(cartItem.getQuantity());
      orderItem.setTotalPrice(cartItem.getTotalPrice());
      OrderItem saveOrderItem = orderItemRepository.save(orderItem);
      orderItems.add(saveOrderItem);
    }
    order.setOrderItems(orderItems);
    order.setTotalPrice(cartService.calculateCartTotals(cart));
    restaurant.getOrders().add(order);
    orderRepository.save(order);
    return order;
  }

  @Override
  public Order updateOrder(Long orderId, String orderStatus) throws Exception {
    Order order = findOrderById(orderId);
    if(orderStatus.equals("OUT_FOR_DELIVERY")
        || orderStatus.equals("DELIVERED")
        || orderStatus.equals("COMPLETED")
        || orderStatus.equals("PENDING")) {
      order.setOrderStatus(orderStatus);
      return orderRepository.save(order);
    }
    throw new Exception("please select a valid order status");
  }

  @Override
  public void cancelOrder(Long orderId) throws Exception {
    Order order = findOrderById(orderId);
    orderRepository.delete(order);
  }

  @Override
  public List<Order> getUserOrder(Long userId) throws Exception {
    return orderRepository.findByCustomerId(userId);
  }

  @Override
  public List<Order> getRestaurantOrder(Long restaurantId, String orderStatus) throws Exception {
    List<Order> orders = orderRepository.findByRestaurantId(restaurantId);
    if(!Objects.equals(orderStatus, "ALL")){
      orders = orders.stream().filter(order -> order.getOrderStatus().equals(orderStatus)).collect(
          Collectors.toList());
    }
    return orders;
  }

  @Override
  public Order findOrderById(Long orderId) throws Exception {
    Optional<Order> optionalOrder = orderRepository.findById(orderId);
    if(optionalOrder.isEmpty()) throw new Exception("order not found");
    return optionalOrder.get();
  }
}
