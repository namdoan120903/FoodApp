package com.example.foodapp.repository;

import com.example.foodapp.model.Food;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FoodRepository extends JpaRepository<Food,Long> {
  public List<Food> findByRestaurantId(Long restaurandId);
  @Query("select f from Food f where f.name LIKE %:keyword% OR f.foodCategory.name LIKE %:keyword% ")
  public List<Food> searchFood(@Param("keyword") String keyword);
}
