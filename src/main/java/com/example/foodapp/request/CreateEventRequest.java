package com.example.foodapp.request;

import java.time.LocalDateTime;
import java.util.Date;
import lombok.Data;
import org.springframework.cglib.core.Local;

@Data
public class CreateEventRequest {
  private String name;
  private String location;
  private String description;
  private LocalDateTime startedAt;
  private LocalDateTime EndAt;
  private String image;
}
