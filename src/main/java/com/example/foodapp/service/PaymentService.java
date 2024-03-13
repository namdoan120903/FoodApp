package com.example.foodapp.service;

import com.example.foodapp.model.Order;
import com.example.foodapp.response.PaymentResponse;
import com.stripe.exception.StripeException;

public interface PaymentService {
  public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
