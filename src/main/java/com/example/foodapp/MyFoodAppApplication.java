package com.example.foodapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;

@SpringBootApplication
public class MyFoodAppApplication {

  public static void main(String[] args) {
    SpringApplication.run(MyFoodAppApplication.class, args);
  }

}
