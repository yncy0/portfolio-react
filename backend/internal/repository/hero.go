package repository

import (
	"database/sql"
	"github.com/yncy0/portfolio-react/internal/models"
)

type HeroRepository struct {
	db *sql.DB
}

func NewHeroRepository(db *sql.DB) *HeroRepository {
	return &HeroRepository{db: db}
}

func (r *HeroRepository) GetAll() ([]models.HeroTitle, error) {
	rows, err := r.db.Query("SELECT id, name, description FROM hero_title")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var heroes []models.HeroTitle
	for rows.Next() {
		var h models.HeroTitle
		if err := rows.Scan(&h.ID, &h.Name, &h.Description); err != nil {
			return nil, err
		}
		heroes = append(heroes, h)
	}
	return heroes, nil
}

func (r *HeroRepository) Update(id int, hero *models.HeroTitle) error {
	_, err := r.db.Exec(
		"UPDATE hero_title SET name = ?, description = ? WHERE id = ?",
		hero.Name, hero.Description, id,
	)
	return err
}

