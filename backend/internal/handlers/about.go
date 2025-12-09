package handlers

import (
	"net/http"
	"strconv"
	"github.com/yncy0/portfolio-react/internal/models"
	"github.com/yncy0/portfolio-react/internal/repository"

	"github.com/gin-gonic/gin"
)

type AboutHandler struct {
	repo *repository.AboutRepository
}

func NewAboutHandler(repo *repository.AboutRepository) *AboutHandler {
	return &AboutHandler{repo: repo}
}

func (h *AboutHandler) GetAll(c *gin.Context) {
	abouts, err := h.repo.GetAll()
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, abouts)
}

func (h *AboutHandler) Update(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var about models.About
	if err := c.ShouldBindJSON(&about); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.repo.Update(id, &about); err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.IndentedJSON(http.StatusOK, gin.H{"message": "About updated successfully"})
}
