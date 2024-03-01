package com.example.foodapp.repository;

import com.example.foodapp.model.Restaurant;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
  @Query("select r from Restaurant r where lower(r.name) LIKE lower(concat('%', :query, '%')) OR lower(r.cuisineType) LIKE lower(concat('%', :query, '%') ) ")
  List<Restaurant> findBySearchQuery(String query); //search by name or cuisine
  Restaurant findByOwnerId(Long userId);
}
