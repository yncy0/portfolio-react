package handlers

import (
	"net/http"
	"strconv"
	"github.com/yncy0/portfolio-react/internal/models"
	"github.com/yncy0/portfolio-react/internal/repository"

	"github.com/gin-gonic/gin"
)

type BadgeHandler struct {
	repo *repository.BadgeRepository
}

func NewBadgeHandler(repo *repository.BadgeRepository) *BadgeHandler {
	return &BadgeHandler{repo: repo}
}

func (h *BadgeHandler) GetAll(c *gin.Context) {
	badges, err := h.repo.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, badges)
}

func (h *BadgeHandler) Update(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var badge models.Badge
	if err := c.ShouldBindJSON(&badge); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.repo.Update(id, &badge); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Badge updated successfully"})
}

