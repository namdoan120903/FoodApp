package com.example.foodapp.repository;

import com.example.foodapp.model.IngredientCategory;
import java.util.List;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientCategoryRepository extends JpaRepository<IngredientCategory, Long> {
  public List<IngredientCategory> findByRestaurantId(Long id);
}
