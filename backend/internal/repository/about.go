package repository

import (
	"database/sql"
	"github.com/yncy0/portfolio-react/internal/models"
)

type AboutRepository struct {
	db *sql.DB
}

func NewAboutRepository(db *sql.DB) *AboutRepository {
	return &AboutRepository{db: db}
}

func (r *AboutRepository) GetAll() ([]models.About, error) {
	rows, err := r.db.Query("SELECT id, description FROM about")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var abouts []models.About
	for rows.Next() {
		var a models.About
		if err := rows.Scan(&a.ID, &a.Description); err != nil {
			return nil, err
		}
		abouts = append(abouts, a)
	}
	return abouts, nil
}

func (r *AboutRepository) Update(id int, about *models.About) error {
	_, err := r.db.Exec(
		"UPDATE about SET description = ? WHERE id = ?",
		about.Description, id,
	)
	return err
}

