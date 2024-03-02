package com.example.foodapp.controller;

import com.example.foodapp.model.Food;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.model.User;
import com.example.foodapp.request.CreateFoodRequest;
import com.example.foodapp.response.MessageResponse;
import com.example.foodapp.service.FoodService;
import com.example.foodapp.service.RestaurantService;
import com.example.foodapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {
  @Autowired
  private FoodService foodService;
  @Autowired
  private UserService userService;
  @Autowired
  private RestaurantService restaurantService;
  @PostMapping()
  public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest request,
      @RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Restaurant restaurant = restaurantService.findRestaurantById(request.getRestaurantId());
    Food food = foodService.createFood(request, request.getCategory(), restaurant);
    return new ResponseEntity<>(food, HttpStatus.CREATED);
  }

  @DeleteMapping ("/{id}")
  public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id,
      @RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);

    foodService.deleteFood(id);
    MessageResponse messageResponse = new MessageResponse();
    messageResponse.setMessage("food deleted successfully");
    return new ResponseEntity<>(messageResponse, HttpStatus.OK);
  }
  @PutMapping("/{id}/status")
  public ResponseEntity<Food> updateFoodAvailableStatus(@PathVariable Long id,
      @RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);

    Food food = foodService.updateAvailableStatus(id);
    return new ResponseEntity<>(food, HttpStatus.OK);
  }


}
