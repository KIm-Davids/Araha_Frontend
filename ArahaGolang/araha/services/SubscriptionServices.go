package services

import (
	"araha/araha/exceptions"
	"araha/araha/mapper"
	"araha/araha/models"
	"araha/araha/repository"
	"log"
	"net/http"
)

type SubscriptionServices interface {
	Subscription(subscription models.Subscription) (int, error)
}

type NewSubscriptionServices struct{}

func (nss *NewSubscriptionServices) CreateSubscription(subscription models.Subscription) (int, error) {
	var invalidDetailsException exceptions.MyException

	if subscription.SubscriptionType != " " {
		subscription = mapper.FindSubscriptionTypes(subscription)
		db, err := repository.SubscriptionRepo()
		db.Save(subscription)
		if err != nil {
			log.Fatalf("Could not save to the database: %v", err)
		}
		return http.StatusCreated, nil
	}
	return http.StatusBadRequest, &invalidDetailsException
}

func (nss *NewSubscriptionServices) UpdateSubscription(subscription models.Subscription) {
	//var missingInfoException exceptions.MyException

	if subscription.Amount != 0 || subscription.SubscriptionType != " " {
		foundSubscription := mapper.FindSubscriptionTypes(subscription)
		newSubscription := foundSubscription.Amount + subscription.Amount

	}
}
