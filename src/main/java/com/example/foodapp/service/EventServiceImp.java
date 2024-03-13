package com.example.foodapp.service;

import com.example.foodapp.model.Event;
import com.example.foodapp.model.Restaurant;
import com.example.foodapp.repository.EventRepository;
import com.example.foodapp.request.CreateEventRequest;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImp implements EventService{
  @Autowired
  private EventRepository eventRepository;
  @Autowired
  private RestaurantService restaurantService;
  @Override
  public Event createEvent(CreateEventRequest request, Long restaurantId) throws Exception {
    Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
    Event event = new Event();
    event.setRestaurant(restaurant);
    event.setName(request.getName());
    event.setImage(request.getImage());
    event.setDescription(request.getDescription());
    event.setLocation(request.getLocation());
    event.setStartedAt(request.getStartedAt());
    event.setEndAt(request.getEndAt());
    return eventRepository.save(event);
  }

  @Override
  public List<Event> getAllEvent() {
    return eventRepository.findAll();
  }

  @Override
  public List<Event> getEventRestaurant(Long restaurantId) {
    return eventRepository.findByRestaurantId(restaurantId);
  }

  @Override
  public void deleteEvent(Long eventId) throws Exception{
    Optional<Event> event = eventRepository.findById(eventId);
    if (event.isEmpty()) throw new Exception("event not found with id" +eventId);
    Event event1 = event.get();
    eventRepository.delete(event1);
  }
}
