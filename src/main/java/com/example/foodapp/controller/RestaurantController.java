package com.example.foodapp.controller;

import com.example.foodapp.dto.RestaurantDTO;
import com.example.foodapp.model.Event;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.model.User;
import com.example.foodapp.repository.RestaurantRepository;
import com.example.foodapp.repository.UserRepository;
import com.example.foodapp.service.EventService;
import com.example.foodapp.service.RestaurantService;
import com.example.foodapp.service.RestaurantServiceImp;
import com.example.foodapp.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
  @Autowired
  private UserService userService;
  @Autowired
  private RestaurantService restaurantService;
  @Autowired
  private EventService eventService;
  @GetMapping("/search")
  public ResponseEntity<List<Restaurant>> searchRestaurant(@RequestHeader("Authorization") String jwt,@RequestParam String keyword) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    List<Restaurant> restaurants = restaurantService.searchRestaurant(keyword);
    return new ResponseEntity<>(restaurants, HttpStatus.OK);
  }
  @GetMapping()
  public ResponseEntity<List<Restaurant>> getAllRestaurant(@RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    List<Restaurant> restaurants = restaurantService.getAllRestaurant();
    return new ResponseEntity<>(restaurants, HttpStatus.OK);
  }
  @GetMapping("/{id}")
  public ResponseEntity<Restaurant> getAllRestaurant(@RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Restaurant restaurant = restaurantService.findRestaurantById(id);
    return new ResponseEntity<>(restaurant, HttpStatus.OK);
  }
  @PutMapping("/{id}/add-favorites")
  public ResponseEntity<RestaurantDTO> addToFavorites(@RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    RestaurantDTO restaurant = restaurantService.addToFavorites(id, user);
    return new ResponseEntity<>(restaurant, HttpStatus.OK);
  }
  @GetMapping("/event")
  public ResponseEntity<List<Event>> getAllEvent(@RequestHeader("Authorization") String jwt) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    List<Event> events = eventService.getAllEvent();
    return  new ResponseEntity<>(events, HttpStatus.OK);
  }
  @GetMapping("/event/{restaurantId}")
  public ResponseEntity<List<Event>> getRestaurantEvent(@RequestHeader("Authorization") String jwt, @PathVariable Long restaurantId) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    List<Event> events = eventService.getEventRestaurant(restaurantId);
    return  new ResponseEntity<>(events, HttpStatus.OK);
  }


}
