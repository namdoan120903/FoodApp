package com.example.foodapp.repository;

import com.example.foodapp.model.IngredientsItem;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientItemRepository extends JpaRepository<IngredientsItem, Long> {
  public List<IngredientsItem> findByRestaurantId(Long id);
}
