package com.example.foodapp.controller;

import com.example.foodapp.model.Category;
import com.example.foodapp.model.User;
import com.example.foodapp.service.CategoryServices;
import com.example.foodapp.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CategoryController {
  @Autowired
  private CategoryServices categoryServices;
  @Autowired
  private UserService userService;
  @PostMapping("/admin/category")
  public ResponseEntity<Category> createCategory(@RequestBody Category category, @RequestHeader("Authorization") String jwt) throws Exception{
    User user = userService.findUserByJwtToken(jwt);

    Category createCatagory = categoryServices.createCategory(category.getName(), user.getId());
    return new ResponseEntity<>(createCatagory, HttpStatus.CREATED);
  }
  @GetMapping("/category/restaurant")
  public ResponseEntity<List<Category>> getRestaurantCategory(@RequestHeader("Authorization") String jwt) throws Exception{
    User user = userService.findUserByJwtToken(jwt);

    List<Category> categories = categoryServices.getRestaurantCategory(user.getId());
    return new ResponseEntity<>(categories, HttpStatus.OK);
  }


}
