package com.example.foodapp.service;

import com.example.foodapp.dto.RestaurantDTO;
import com.example.foodapp.model.Address;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.model.User;
import com.example.foodapp.repository.AddressRepository;
import com.example.foodapp.repository.RestaurantRepository;
import com.example.foodapp.repository.UserRepository;
import com.example.foodapp.request.CreateRestaurantRequest;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantServiceImp implements RestaurantService{
  @Autowired
  private RestaurantRepository restaurantRepository;
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private AddressRepository addressRepository;

  @Override
  public Restaurant findRestaurantById(Long id) throws Exception {
    Optional<Restaurant> opt = restaurantRepository.findById(id);
    if (opt.isEmpty()){
      throw  new Exception("restaurant not found with id" + id);
    }
    return opt.get();
  }
  @Override
  public Restaurant createRestaurant(CreateRestaurantRequest request, User user) {
    Address address = addressRepository.save(request.getAddress());
    Restaurant restaurant = new Restaurant();
    restaurant.setAddress(address);
    restaurant.setContactInformation(request.getContactInformation());
    restaurant.setCuisineType(request.getCuisineType());
    restaurant.setDescription(request.getDescription());
    restaurant.setImages(request.getImages());
    restaurant.setName(request.getName());
    restaurant.setOpeningHours(request.getOpeningHours());
    restaurant.setRegistrationDate(LocalDateTime.now());
    restaurant.setOwner(user);
    return restaurantRepository.save(restaurant);
  }

  @Override
  public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest request) throws Exception {
    Restaurant restaurant = findRestaurantById(restaurantId);
    if(restaurant.getDescription() != null) restaurant.setDescription(restaurant.getDescription());
    if(restaurant.getName() != null) restaurant.setName(request.getName());
    if(restaurant.getCuisineType() != null) restaurant.setCuisineType(request.getCuisineType());
    return restaurantRepository.save(restaurant);
  }
  @Override
  public void deleteRestaurant(Long restaurantId) throws Exception {
    Restaurant restaurant = findRestaurantById(restaurantId);
    restaurantRepository.delete(restaurant);
  }

  @Override
  public List<Restaurant> getAllRestaurant() {
    return restaurantRepository.findAll();
  }

  @Override
  public List<Restaurant> searchRestaurant(String keyword) {
    return restaurantRepository.findBySearchQuery(keyword);
  }

  //get restaurant by owner
  @Override
  public Restaurant getRestaurantByUserID(Long id){
    Restaurant restaurant = restaurantRepository.findByOwnerId(id);
    return restaurant;
  }

  @Override
  public RestaurantDTO addToFavorites(Long restaurantId, User user) throws Exception {
    Restaurant restaurant = findRestaurantById(restaurantId);
    RestaurantDTO restaurantDTO = new RestaurantDTO();
    restaurantDTO.setDescription(restaurant.getDescription());
    restaurantDTO.setImages(restaurant.getImages());
    restaurantDTO.setTitle(restaurant.getName());
    restaurantDTO.setId(restaurantId);

    List<RestaurantDTO> favorites = user.getFavorites();

    if (favorites.isEmpty() || !favorites.removeIf(dto -> dto.getId().equals(restaurantDTO.getId()))) {
      favorites.add(restaurantDTO);
    } 

    userRepository.save(user);
    return restaurantDTO;
  }
  //update the open status
  @Override
  public Restaurant updateRestaurantStatus(Long id) throws Exception {
    Restaurant restaurant = findRestaurantById(id);
    restaurant.setOpen(!restaurant.isOpen());
    return restaurantRepository.save(restaurant);
  }
}
