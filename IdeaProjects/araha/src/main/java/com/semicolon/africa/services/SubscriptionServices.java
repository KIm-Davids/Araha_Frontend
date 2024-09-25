package com.semicolon.africa.services;

import com.semicolon.africa.dtos.request.*;

public interface SubscriptionServices {

    void createSubscription(SubscriptionRequest request);
    void changeSubscription(changeSubRequest request);
    void pausingSubscription(pauseSubRequest request);
    void resumingSubscription(ResumeSubRequest request);
    void cancellingSubscription(cancelSubRequest request);
    void getAllSubscription(getAllSubRequest request);
}
