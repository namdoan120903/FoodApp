package com.example.foodapp.service;

import com.example.foodapp.model.Category;
import com.example.foodapp.model.Food;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.repository.FoodRepository;
import com.example.foodapp.repository.RestaurantRepository;
import com.example.foodapp.request.CreateFoodRequest;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodServiceImp implements FoodService{
  @Autowired
  private FoodRepository foodRepository;
  @Override
  public Food createFood(CreateFoodRequest request, Category category, Restaurant restaurant) {
    Food food = new Food();
    food.setFoodCategory(category);
    food.setRestaurant(restaurant);
    food.setDescription(request.getDescription());
    food.setPrice(request.getPrice());
    food.setName(request.getName());
    food.setImages(request.getImages());
    food.setSeasonal(request.isSeasonal());
    food.setVegetarian(request.isVegetarian());
    food.setIngredients(request.getIngredientsItems());
    Food savedFood = foodRepository.save(food);
    restaurant.getFoods().add(savedFood);
    return savedFood;
  }

  @Override
  public void deleteFood(Long foodId) throws Exception {
    Food food = findFoodById(foodId);
    food.setRestaurant(null);
    foodRepository.save(food);
  }

  @Override
  public List<Food> getRestaurantFood(Long restaurantId, boolean isVegetarian, boolean isNonVeg,
      boolean isSeasonal, String foodCategory) {

    List<Food> foods = foodRepository.findByRestaurantId(restaurantId);
    //get food is vegetarian
    if(isVegetarian){
      foods = foods.stream().filter(food -> food.isVegetarian() == isVegetarian).collect(Collectors.toList());
    }
    if(isNonVeg){
      foods = foods.stream().filter(food -> !food.isVegetarian()).collect(Collectors.toList());
    }
    if(isSeasonal){
      foods = foods.stream().filter(food -> food.isSeasonal() == isSeasonal).collect(Collectors.toList());
    }
    //get food has foodCategory
    if(foodCategory != null && !foodCategory.isEmpty()){
      foods = foods.stream().filter(food -> {
        if(food.getFoodCategory()!= null) return food.getFoodCategory().getName().equals(foodCategory);
        return false;
      }).collect(Collectors.toList());
    }
    return foods;
  }

  @Override
  public List<Food> searchFood(String keyword) {
    return foodRepository.searchFood(keyword);
  }

  @Override
  public Food findFoodById(Long foodId) throws Exception {
    Optional<Food> optionalFood = foodRepository.findById(foodId);
    if(optionalFood.isEmpty()) throw new Exception("food not exist ..");
    return  optionalFood.get();
  }

  @Override
  public Food updateAvailableStatus(Long foodId) throws Exception {
    Food food = findFoodById(foodId);
    food.setAvailable(!food.isAvailable());
    foodRepository.save(food);
    return food;
  }
}
