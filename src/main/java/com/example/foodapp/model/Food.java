package com.example.foodapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Food {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private String description;

  private Long price;

  @ManyToOne
  private Category foodCategory;

  @Column(length = 1000)
  @ElementCollection
  private List<String> images;

  private boolean available;

  @ManyToOne
  private Restaurant restaurant;

  private boolean isVegetarian;

  private boolean isSeasonal;
  private boolean nonVegetarian;

  @ManyToMany
  private List<IngredientsItem> ingredients = new ArrayList<>();

  private Date creationDate;
}
