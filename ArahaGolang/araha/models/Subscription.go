package models

import (
	"araha/araha/constants"
	"time"
)

type Subscription struct {
	ID               string                     `json:"id"`
	SubscriptionType constants.SubscriptionType `json:"SubscriptionType"`
	Description      string                     `json:"description"`
	Amount           int                        `json:"amount"`
	Discount         int
	Date             time.Time
	UserId           int
}
