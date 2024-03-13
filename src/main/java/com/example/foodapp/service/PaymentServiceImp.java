package com.example.foodapp.service;

import com.example.foodapp.model.Order;
import com.example.foodapp.response.PaymentResponse;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.param.checkout.SessionCreateParams.Mode;
import com.stripe.param.checkout.SessionCreateParams.PaymentMethodType;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImp implements PaymentService {

  @Value("${stripe.api.key}")
  private String stripeSecretKey;

  @Override
  public PaymentResponse createPaymentLink(Order order) throws StripeException {
    Stripe.apiKey = stripeSecretKey;
    SessionCreateParams params = SessionCreateParams.builder()
        .addPaymentMethodType(PaymentMethodType.CARD).setMode(SessionCreateParams.Mode.PAYMENT)
        .setSuccessUrl("http://localhost:3000/payment/success/" + order.getId())
        .setCancelUrl("http://localhost:3000/payment/fail").addLineItem(
            SessionCreateParams.LineItem.builder().setQuantity(1L).setPriceData(
                    SessionCreateParams.LineItem.PriceData.builder().setCurrency("usd")
                        .setUnitAmount((long) order.getTotalPrice() * 100).setProductData(
                            SessionCreateParams.LineItem.PriceData.ProductData.builder().setName("Nam Doan")
                                .build()
                        )
                        .build()
                )
                .build()
        )
        .build();
    Session session = Session.create(params);
    PaymentResponse response = new PaymentResponse();
    response.setPayment_url(session.getUrl());

    return response;
  }
}
