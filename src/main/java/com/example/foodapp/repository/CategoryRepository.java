package com.example.foodapp.repository;

import com.example.foodapp.model.Category;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
  public List<Category> findByRestaurantId(Long restaurantId);
}
