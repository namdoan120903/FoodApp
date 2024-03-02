package com.example.foodapp.service;

import com.example.foodapp.model.IngredientCategory;
import com.example.foodapp.model.IngredientsItem;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.repository.IngredientCategoryRepository;
import com.example.foodapp.repository.IngredientItemRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IngredientsServiceImp implements IngredientsService{
  @Autowired
  private IngredientItemRepository ingredientItemRepository;
  @Autowired
  private IngredientCategoryRepository ingredientCategoryRepository;
  @Autowired
  private RestaurantService restaurantService;
  @Override
  public IngredientCategory createIngredientCategory(String name, Long restaurantId)
      throws Exception {
    Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
    IngredientCategory ingredientCategory = new IngredientCategory();
    ingredientCategory.setName(name);
    ingredientCategory.setRestaurant(restaurant);
    return ingredientCategoryRepository.save(ingredientCategory);
  }

  @Override
  public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
    Optional<IngredientCategory> ingredientCategory = ingredientCategoryRepository.findById(id);
    if (ingredientCategory.isEmpty()) throw new Exception("ingredient category not found");
    return ingredientCategory.get();
  }

  @Override
  public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long restaurantId)
      throws Exception {
    restaurantService.findRestaurantById(restaurantId);//if not exist restaurant then throw new exception restaurant
    return ingredientCategoryRepository.findByRestaurantId(restaurantId);
  }

  @Override
  public IngredientsItem createIngredientsItem(Long restaurantId, String name, Long categoryId)
      throws Exception {
    Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
    IngredientCategory ingredientCategory = findIngredientCategoryById(categoryId);

    IngredientsItem ingredientsItem = new IngredientsItem();
    ingredientsItem.setName(name);
    ingredientsItem.setCategory(ingredientCategory);
    ingredientsItem.setRestaurant(restaurant);
    ingredientItemRepository.save(ingredientsItem);

    ingredientCategory.getIngredients().add(ingredientsItem);//add item to category
    return ingredientsItem;
  }

  @Override
  public List<IngredientsItem> findRestaurantIngredients(Long restaurantId) throws Exception {
    Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
    return ingredientItemRepository.findByRestaurantId(restaurantId);
  }

  @Override
  public IngredientsItem updateStoke(Long id) throws Exception {
    Optional<IngredientsItem> optIngredientsItem = ingredientItemRepository.findById(id);
    if (optIngredientsItem.isEmpty()) throw new Exception("ingredient item not found");
    IngredientsItem ingredientsItem = optIngredientsItem.get();
    ingredientsItem.setStoke(!ingredientsItem.isStoke());
    return ingredientItemRepository.save(ingredientsItem);
  }
}
