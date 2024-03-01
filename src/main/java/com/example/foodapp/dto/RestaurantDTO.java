package com.example.foodapp.dto;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import java.util.List;
import lombok.Data;

@Data
@Embeddable
public class RestaurantDTO {
  private Long id;

  private String title;

  @Column(length = 1000)
  private List<String> images;

  private String description;

}
