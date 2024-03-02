package com.example.foodapp.request;

import com.example.foodapp.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
  private Long restaurantId;
  private Address deliveryAddress;
}
