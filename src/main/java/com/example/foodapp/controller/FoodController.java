package com.example.foodapp.controller;

import com.example.foodapp.model.Category;
import com.example.foodapp.model.Food;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.model.User;
import com.example.foodapp.request.CreateFoodRequest;
import com.example.foodapp.service.FoodService;
import com.example.foodapp.service.RestaurantService;
import com.example.foodapp.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/food")
public class FoodController {
  @Autowired
  private FoodService foodService;
  @Autowired
  private UserService userService;
  @Autowired
  private RestaurantService restaurantService;
  @GetMapping ("/search")
  public ResponseEntity<List<Food>> searchFood(@RequestParam String keyword, @RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    List<Food> foods = foodService.searchFood(keyword);
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }
  @GetMapping("/restaurant/{id}")
  public ResponseEntity<List<Food>> getRestaurantFood(@RequestHeader("Authorization") String jwt,
      @PathVariable Long id,
      @RequestParam boolean vegetarian,
      @RequestParam boolean nonveg,
      @RequestParam boolean seasonal,
      @RequestParam(required = false) String foodCategory) throws Exception {
    User user = userService.findUserByJwtToken(jwt);

    List<Food> foods = foodService.getRestaurantFood(id, vegetarian, nonveg, seasonal, foodCategory);
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }

}
