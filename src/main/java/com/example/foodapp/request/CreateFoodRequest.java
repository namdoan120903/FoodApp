package com.example.foodapp.request;

import com.example.foodapp.model.Category;
import com.example.foodapp.model.IngredientsItem;
import java.util.List;
import lombok.Data;

@Data
public class CreateFoodRequest {
  private String name;
  private String description;
  private Long price;
  private Category category;
  private List<String> images;
  private Long restaurantId;
  private boolean vegetarian;
  private boolean seasonal;
  private List<IngredientsItem> ingredientsItems;

}
