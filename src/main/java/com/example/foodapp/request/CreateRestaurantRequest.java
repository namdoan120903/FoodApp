package com.example.foodapp.request;

import com.example.foodapp.model.Address;
import com.example.foodapp.model.ContactInformation;
import jakarta.persistence.Embedded;
import jakarta.persistence.OneToOne;
import java.util.List;
import lombok.Data;

@Data

public class CreateRestaurantRequest {
  private Long id;
  private String name;
  private String description;
  private String cuisineType;
  private Address address;
  private ContactInformation contactInformation;
  private String openingHours;
  private List<String> images;
}
