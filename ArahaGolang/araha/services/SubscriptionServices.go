package services

import (
	"araha/araha/exceptions"
	"araha/araha/mapper"
	"araha/araha/models"
	"araha/araha/repository"
	"log"
	"net/http"
)

type CreateSubscriptionServices interface {
	CreateSubscription(subscription models.Subscription) (int, error)
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

type UpdateSubscriptionServices struct{}

func (nss *NewSubscriptionServices) UpdateSubscription(subscription models.Subscription) (int, error) {
	//var cannotUpdateSubscriptionException exceptions.MyException

	if subscription.Amount != 0 || subscription.SubscriptionType != " " {
		foundSubscription := mapper.FindSubscriptionTypes(subscription)
		newSubscription := foundSubscription.Amount + subscription.Amount
		db, err := repository.SubscriptionRepo()
		db.Save(newSubscription)

		if err != nil {
			log.Fatalf("Couldn't update the user subscription %v", err)
			return http.StatusAccepted, nil
		}
	}
	return http.StatusNotModified, nil

}

func (nss *NewSubscriptionServices) DeleteSubscription(subscription models.Subscription) {
	var UnableToDeleteSubscriptionException exceptions.MyException

	db, err := repository.SubscriptionRepo()

	db.Delete(subscription)

	if err != nil {
		log.Fatalf("Couldn't delete subscription %v", UnableToDeleteSubscriptionException)
	}
}

func (nss *NewSubscriptionServices) GetAllSubscription(subscription models.Subscription){
	var unableToGetAllValuesException exceptions.MyException

	db, err := repository.SubscriptionRepo()
	db.

}
