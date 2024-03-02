package com.example.foodapp.service;


import com.example.foodapp.model.Category;
import java.util.List;

public interface CategoryServices {
  public Category createCategory(String name, Long userId) throws Exception;
  public List<Category> getRestaurantCategory(Long userId) throws Exception;
  public Category findCategoryById(Long id) throws Exception;
}
