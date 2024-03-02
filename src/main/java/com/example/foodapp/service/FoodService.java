package com.example.foodapp.service;

import com.example.foodapp.model.Category;
import com.example.foodapp.model.Food;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.request.CreateFoodRequest;
import java.util.List;

public interface FoodService {
  public Food createFood(CreateFoodRequest request, Category category, Restaurant restaurant);
  public void deleteFood(Long foodId) throws Exception;
  public List<Food> getRestaurantFood(Long restaurantId, boolean vegetarian, boolean nonveg, boolean seasonal, String foodCategory);
  public List<Food> searchFood(String keyword);
  public Food findFoodById(Long foodId) throws Exception;
  public Food updateAvailableStatus(Long foodId) throws Exception;

}
