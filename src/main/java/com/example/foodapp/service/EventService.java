package com.example.foodapp.service;

import com.example.foodapp.model.Event;
import com.example.foodapp.request.CreateEventRequest;
import java.util.List;

public interface EventService {
  public Event createEvent(CreateEventRequest request, Long restaurantId) throws Exception;
  public List<Event> getAllEvent();
  public List<Event> getEventRestaurant(Long restaurantId);
  public void deleteEvent(Long eventId) throws Exception;
}
