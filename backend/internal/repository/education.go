package repository

import (
	"database/sql"
	"github.com/yncy0/portfolio-react/internal/models"
)

type EducationRepository struct {
	db *sql.DB
}

func NewEducationRepository(db *sql.DB) *EducationRepository {
	return &EducationRepository{db: db}
}

func (r *EducationRepository) GetAll() ([]models.Education, error) {
	rows, err := r.db.Query("SELECT id, title, description, year FROM education")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var educations []models.Education
	for rows.Next() {
		var e models.Education
		if err := rows.Scan(&e.ID, &e.Title, &e.Description, &e.Year); err != nil {
			return nil, err
		}
		educations = append(educations, e)
	}
	return educations, nil
}

func (r *EducationRepository) Update(id int, edu *models.Education) error {
	_, err := r.db.Exec(
		"UPDATE education SET title = ?, description = ?, year = ? WHERE id = ?",
		edu.Title, edu.Description, edu.Year, id,
	)
	return err
}

