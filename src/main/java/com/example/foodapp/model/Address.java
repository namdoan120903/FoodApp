package com.example.foodapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Address {
  @Id
  private Long id;
}
