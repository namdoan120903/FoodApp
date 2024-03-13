package com.example.foodapp.service;

import com.example.foodapp.model.Category;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.repository.CartRepository;
import com.example.foodapp.repository.CategoryRepository;
import com.example.foodapp.repository.RestaurantRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImp implements CategoryServices{
  @Autowired
  private CategoryRepository categoryRepository;
  @Autowired
  private RestaurantService restaurantService;
  @Override
  public Category createCategory(String name, Long restaurantId) throws Exception {//using userId to get restaurant
    Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
    Category category = new Category();
    category.setName(name);
    category.setRestaurant(restaurant);
    categoryRepository.save(category);
    return category;
  }

  @Override
  public List<Category> getRestaurantCategory(Long id) throws Exception {
    Restaurant restaurant = restaurantService.findRestaurantById(id);
    List<Category> categories = categoryRepository.findByRestaurantId(restaurant.getId());
    return categories;
  }

  @Override
  public Category findCategoryById(Long id) throws Exception {
    Optional<Category> optionalCategory = categoryRepository.findById(id);
    if(optionalCategory.isEmpty()) throw new Exception("category not found");
    return optionalCategory.get();
  }
}
