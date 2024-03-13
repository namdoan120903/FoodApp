package com.example.foodapp.controller;

import com.example.foodapp.model.IngredientCategory;
import com.example.foodapp.model.IngredientsItem;
import com.example.foodapp.request.IngredientCategoryRequest;
import com.example.foodapp.request.IngredientRequest;
import com.example.foodapp.service.IngredientsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/ingredient")
public class IngredientController {
  @Autowired
  private IngredientsService ingredientsService;
  @PostMapping("/category")
  public ResponseEntity<IngredientCategory> createIngredientCategory(@RequestBody
      IngredientCategoryRequest request) throws Exception {
    IngredientCategory ingredientCategory = ingredientsService.createIngredientCategory(request.getName(), request.getRestaurantId());
    return new ResponseEntity<>(ingredientCategory, HttpStatus.CREATED);
  }
  @PostMapping()
  public ResponseEntity<IngredientsItem> createIngredientItem(@RequestBody
  IngredientRequest request) throws Exception {
    IngredientsItem ingredientsItem = ingredientsService.createIngredientsItem(request.getRestaurantId(), request.getName(), request.getCategoryId());
    return new ResponseEntity<>(ingredientsItem, HttpStatus.CREATED);
  }
  @PutMapping("/{id}/stock")
  public ResponseEntity<IngredientsItem> updateStock(@PathVariable Long id) throws Exception {
    IngredientsItem ingredientsItem = ingredientsService.updateStock(id);
    return new ResponseEntity<>(ingredientsItem, HttpStatus.OK);
  }
  @GetMapping ("/restaurant/{id}")
  public ResponseEntity<List<IngredientsItem>> getRestaurantIngredient(@PathVariable Long id) throws Exception {
    List<IngredientsItem> ingredientsItem = ingredientsService.findRestaurantIngredients(id);
    return new ResponseEntity<>(ingredientsItem, HttpStatus.OK);
  }
  @GetMapping ("/restaurant/{id}/category")
  public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategory(@PathVariable Long id) throws Exception {
    List<IngredientCategory> ingredientCategories = ingredientsService.findIngredientCategoryByRestaurantId(id);
    return new ResponseEntity<>(ingredientCategories, HttpStatus.OK);
  }

}
