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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OrderController {
  @Autowired
  private OrderService orderService;
  @Autowired
  private UserService userService;
  @PostMapping("/order")
  public ResponseEntity<Order> creatOrder(@RequestBody OrderRequest request, @RequestHeader("Authorization") String jwt) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    Order order = orderService.createOrder(request, user);
    return new ResponseEntity<>(order, HttpStatus.CREATED);
  }
  @GetMapping ("/order/user")
  public ResponseEntity<List<Order>> getUserOrder(@RequestHeader("Authorization") String jwt) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    List<Order> orders = orderService.getUserOrder(user.getId());
    return new ResponseEntity<>(orders, HttpStatus.CREATED);
  }
  @DeleteMapping  ("/order/{id}")
  public void cancelOrder(@RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    orderService.cancelOrder(id);
  }

}
