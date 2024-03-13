package com.example.foodapp.request;

import lombok.Data;

@Data
public class CategoryRequest {
  private String name;
  private Long restaurantId;
}
