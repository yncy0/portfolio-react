package routes

import (
	"github.com/yncy0/portfolio-react/internal/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(
	r *gin.Engine,
	aboutHandler *handlers.AboutHandler,
	experienceHandler *handlers.ExperienceHandler,
	educationHandler *handlers.EducationHandler,
	heroHandler *handlers.HeroHandler,
	badgeHandler *handlers.BadgeHandler,
	projectHandler *handlers.ProjectHandler,
) {
	api := r.Group("/api/v1")
	{
		api.GET("/about", aboutHandler.GetAll)
		api.PATCH("/about/:id", aboutHandler.Update)

		api.GET("/experiences", experienceHandler.GetAll)
		api.PATCH("/experiences/:id", experienceHandler.Update)

		api.GET("/education", educationHandler.GetAll)
		api.PATCH("/education/:id", educationHandler.Update)

		api.GET("/hero", heroHandler.GetAll)
		api.PATCH("/hero/:id", heroHandler.Update)

		api.GET("/badges", badgeHandler.GetAll)
		api.PATCH("/badges/:id", badgeHandler.Update)

		api.GET("/projects", projectHandler.GetAll)
		api.POST("/projects", projectHandler.Create)
	}
}

