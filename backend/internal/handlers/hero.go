package handlers

import (
	"net/http"
	"strconv"
	"github.com/yncy0/portfolio-react/internal/models"
	"github.com/yncy0/portfolio-react/internal/repository"

	"github.com/gin-gonic/gin"
)

type HeroHandler struct {
	repo *repository.HeroRepository
}

func NewHeroHandler(repo *repository.HeroRepository) *HeroHandler {
	return &HeroHandler{repo: repo}
}

func (h *HeroHandler) GetAll(c *gin.Context) {
	heroes, err := h.repo.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, heroes)
}

func (h *HeroHandler) Update(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var hero models.HeroTitle
	if err := c.ShouldBindJSON(&hero); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.repo.Update(id, &hero); err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.IndentedJSON(http.StatusOK, gin.H{"message": "Hero updated successfully"})
}
