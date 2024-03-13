package com.example.foodapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Restaurant {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne
  private User owner;

  private String name;

  private String description;

  private String cuisineType;

  @OneToOne
  private Address address;

  @Embedded
  private ContactInformation contactInformation;

  private String openingHours;
  @JsonIgnore
  @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Order> orders = new ArrayList<>();

  @ElementCollection
  @Column(length = 1000)
  private List<String> images;

  private LocalDateTime registrationDate;
  private boolean open;

  @JsonIgnore
  @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
  private List<Food> foods = new ArrayList<>();

  @JsonIgnore
  @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Event> events = new ArrayList<>();
}