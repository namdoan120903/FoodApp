package com.example.foodapp.controller;

import com.example.foodapp.model.Event;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.model.User;
import com.example.foodapp.request.CreateEventRequest;
import com.example.foodapp.request.CreateRestaurantRequest;
import com.example.foodapp.response.MessageResponse;
import com.example.foodapp.service.EventService;
import com.example.foodapp.service.RestaurantService;
import com.example.foodapp.service.RestaurantServiceImp;
import com.example.foodapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {
  @Autowired
  private RestaurantService restaurantService;
  @Autowired
  private UserService userService;
  @Autowired
  private EventService eventService;
  @PostMapping
  public ResponseEntity<Restaurant> createRestaurant(@RequestBody CreateRestaurantRequest request,
      @RequestHeader("Authorization") String jwt) throws Exception{

    User user = userService.findUserByJwtToken(jwt);//always authenticate user bt jwt
    Restaurant restaurant = restaurantService.createRestaurant(request, user);
    return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
  }
  @PutMapping("/{id}")
  public ResponseEntity<Restaurant> updateRestaurant(@RequestBody CreateRestaurantRequest request,
      @RequestHeader("Authorization") String jwt,
      @PathVariable Long id) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    Restaurant restaurant = restaurantService.updateRestaurant(id, request);
    return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<MessageResponse> deleteRestaurant(
      @RequestHeader("Authorization") String jwt,
      @PathVariable Long id) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    restaurantService.deleteRestaurant(id);
    MessageResponse messageResponse = new MessageResponse();
    messageResponse.setMessage("restaurant deleted successfully");
    return new ResponseEntity<>(messageResponse, HttpStatus.OK);
  }
  @PutMapping ("/{id}/status")
  public ResponseEntity<Restaurant> updateRestaurantStatus(@RequestHeader("Authorization") String jwt,
      @PathVariable Long id) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    Restaurant restaurant = restaurantService.updateRestaurantStatus(id);
    return new ResponseEntity<>(restaurant, HttpStatus.OK);
  }
  @GetMapping("/user")
  public ResponseEntity<Restaurant> findRestaurantByUserId(@RequestHeader("Authorization") String jwt) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    Restaurant restaurant = restaurantService.getRestaurantByUserID(user.getId());
    return new ResponseEntity<>(restaurant, HttpStatus.OK);
  }
  @PostMapping("/{id}/event")
  public ResponseEntity<Event> createEvent(@RequestBody CreateEventRequest request,
      @RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception{

    User user = userService.findUserByJwtToken(jwt);//always authenticate user bt jwt
    Event event = eventService.createEvent(request, id);
    return new ResponseEntity<>(event, HttpStatus.CREATED);
  }
  @DeleteMapping("/event/{id}")
  public ResponseEntity<MessageResponse> deleteEvent(
      @RequestHeader("Authorization") String jwt,
      @PathVariable Long id) throws Exception{
    User user = userService.findUserByJwtToken(jwt);
    eventService.deleteEvent(id);
    MessageResponse messageResponse = new MessageResponse();
    messageResponse.setMessage("event deleted successfully");
    return new ResponseEntity<>(messageResponse, HttpStatus.OK);
  }


}
