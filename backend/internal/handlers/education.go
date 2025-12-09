package handlers

import (
	"net/http"
	"strconv"
	"github.com/yncy0/portfolio-react/internal/models"
	"github.com/yncy0/portfolio-react/internal/repository"

	"github.com/gin-gonic/gin"
)

type EducationHandler struct {
	repo *repository.EducationRepository
}

func NewEducationHandler(repo *repository.EducationRepository) *EducationHandler {
	return &EducationHandler{repo: repo}
}

func (h *EducationHandler) GetAll(c *gin.Context) {
	educations, err := h.repo.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, educations)
}

func (h *EducationHandler) Update(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var edu models.Education
	if err := c.ShouldBindJSON(&edu); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.repo.Update(id, &edu); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Education updated successfully"})
}

