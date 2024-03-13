package com.example.foodapp.service;

import com.example.foodapp.dto.RestaurantDTO;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.model.User;
import com.example.foodapp.request.CreateRestaurantRequest;
import java.util.List;
//method of Restaurant
public interface RestaurantService {
  public Restaurant createRestaurant(CreateRestaurantRequest request, User user);
  public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest request) throws Exception;
  public void deleteRestaurant(Long restaurantId) throws Exception;
  public List<Restaurant> getAllRestaurant();
  public List<Restaurant> searchRestaurant(String keyword);
  public Restaurant findRestaurantById(Long id) throws Exception;
  public Restaurant getRestaurantByUserID(Long id);
  public RestaurantDTO addToFavorites(Long restaurantId, User user) throws Exception;
  public Restaurant updateRestaurantStatus(Long id) throws Exception;

}
