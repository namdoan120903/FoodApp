package com.example.foodapp.service;

import com.example.foodapp.model.IngredientCategory;
import com.example.foodapp.model.IngredientsItem;
import java.util.List;

public interface IngredientsService {
  public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception;
  public IngredientCategory findIngredientCategoryById(Long id) throws Exception;
  public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long restaurantId) throws Exception;
  public IngredientsItem createIngredientsItem(Long restaurantId, String name, Long categoryId) throws Exception;
  public List<IngredientsItem> findRestaurantIngredients(Long restaurantId) throws Exception;
  public IngredientsItem updateStoke(Long id) throws Exception;
}
