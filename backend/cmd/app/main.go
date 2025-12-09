package main

import (
	"log"
	"github.com/yncy0/portfolio-react/internal/database"
	"github.com/yncy0/portfolio-react/internal/handlers"
	"github.com/yncy0/portfolio-react/internal/repository"
	"github.com/yncy0/portfolio-react/internal/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	db, err := database.NewDatabase("./db/portfolio.db")
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	defer db.Close()

	aboutRepo := repository.NewAboutRepository(db.DB)
	experienceRepo := repository.NewExperienceRepository(db.DB)
	educationRepo := repository.NewEducationRepository(db.DB)
	heroRepo := repository.NewHeroRepository(db.DB)
	badgeRepo := repository.NewBadgeRepository(db.DB)
	projectRepo := repository.NewProjectRepository(db.DB)

	aboutHandler := handlers.NewAboutHandler(aboutRepo)
	experienceHandler := handlers.NewExperienceHandler(experienceRepo)
	educationHandler := handlers.NewEducationHandler(educationRepo)
	heroHandler := handlers.NewHeroHandler(heroRepo)
	badgeHandler := handlers.NewBadgeHandler(badgeRepo)
	projectHandler := handlers.NewProjectHandler(projectRepo)

	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	routes.SetupRoutes(r, aboutHandler, experienceHandler, educationHandler, heroHandler, badgeHandler, projectHandler)

	log.Println("Server starting on :8080")
	if err := r.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
