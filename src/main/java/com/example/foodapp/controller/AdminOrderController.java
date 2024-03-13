package com.example.foodapp.controller;

import com.example.foodapp.model.Order;
import com.example.foodapp.model.User;
import com.example.foodapp.request.OrderRequest;
import com.example.foodapp.service.OrderService;
import com.example.foodapp.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminOrderController {
  @Autowired
  private OrderService orderService;
  @Autowired
  private UserService userService;
  @GetMapping("/order/restaurant/{id}")
  public ResponseEntity<List<Order>> getRestaurantOrder(@PathVariable Long id,
      @RequestParam(required = false) String orderStatus,
      @RequestHeader("Authorization") String jwt) throws Exception{

    User user = userService.findUserByJwtToken(jwt);
    List<Order> orders = orderService.getRestaurantOrder(id, orderStatus);
    return new ResponseEntity<>(orders, HttpStatus.OK);
  }
  @PutMapping("/order/{id}")
  public ResponseEntity<Order> updateOrder(@PathVariable Long id,
      @RequestParam String orderStatus,
      @RequestHeader("Authorization") String jwt) throws Exception{

    User user = userService.findUserByJwtToken(jwt);
    Order order = orderService.updateOrder(id, orderStatus);
    return new ResponseEntity<>(order, HttpStatus.OK);
  }
  @GetMapping("/order/{id}")
  public ResponseEntity<Order> findOrderById(@PathVariable Long id,
      @RequestHeader("Authorization") String jwt) throws Exception{

    User user = userService.findUserByJwtToken(jwt);
    Order order = orderService.findOrderById(id);
    return new ResponseEntity<>(order, HttpStatus.OK);
  }

}
