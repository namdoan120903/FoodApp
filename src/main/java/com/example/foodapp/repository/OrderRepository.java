package com.example.foodapp.repository;

import com.example.foodapp.model.Order;
import java.util.List;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

  public List<Order> findByCustomerId(Long userId);

  public List<Order> findByRestaurantId(Long restaurantId);
}