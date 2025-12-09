package handlers

import (
	"net/http"
	"strconv"
	"github.com/yncy0/portfolio-react/internal/models"
	"github.com/yncy0/portfolio-react/internal/repository"

	"github.com/gin-gonic/gin"
)

type ExperienceHandler struct {
	repo *repository.ExperienceRepository
}

func NewExperienceHandler(repo *repository.ExperienceRepository) *ExperienceHandler {
	return &ExperienceHandler{repo: repo}
}

func (h *ExperienceHandler) GetAll(c *gin.Context) {
	experiences, err := h.repo.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, experiences)
}

func (h *ExperienceHandler) Update(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var exp models.Experience
	if err := c.ShouldBindJSON(&exp); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.repo.Update(id, &exp); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Experience updated successfully"})
}

