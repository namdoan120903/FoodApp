package com.example.foodapp.request;

import com.example.foodapp.model.IngredientsItem;
import java.util.List;
import lombok.Data;

@Data
public class AddCartItemRequest {
  private Long foodId;
  private int quantity;
  private List<String> ingredientsItems;
}
