package com.example.foodapp.repository;

import com.example.foodapp.model.Event;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
  public List<Event> findByRestaurantId(Long restaurantId);
}
