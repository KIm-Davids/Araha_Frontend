package web

import (
	"araha/araha/models"
	"araha/araha/services"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CreateSubscriptionController() gin.HandlerFunc {
	return func(c *gin.Context) {
		var Subscription models.Subscription

		if err := c.ShouldBindJSON(&Subscription); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error creating subscription": err.Error()})
			return
		}
		result, err := services.CreateSubscription(Subscription)
		if err != nil {
			fmt.Printf("Couldnt create a subscription %v", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		c.JSON(http.StatusCreated, gin.H{"data": "Created Subscription successfully !!!",
			"Object": result})

	}

}

func UpdateSubscriptionController() gin.HandlerFunc {
	var subscription models.Subscription
	return func(c *gin.Context) {
		if err := c.ShouldBindJSON(&subscription); err != nil {
			c.JSON(http.StatusNotModified, gin.H{"Error updating subscription": err})
		}
		result, err := services.UpdateSubscription(subscription)
	}
}
