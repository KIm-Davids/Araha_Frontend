package main

import (
	"araha/araha/web"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.POST("/create-subscription", web.CreateSubscriptionController())
	r.PATCH("/update-subscription", web.UpdateSubscriptionController())
	r.Run()

}
