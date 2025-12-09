package repository

import (
	"database/sql"
	"github.com/yncy0/portfolio-react/internal/models"
)

type ExperienceRepository struct {
	db *sql.DB
}

func NewExperienceRepository(db *sql.DB) *ExperienceRepository {
	return &ExperienceRepository{db: db}
}

func (r *ExperienceRepository) GetAll() ([]models.Experience, error) {
	rows, err := r.db.Query("SELECT id, title, description, year_start, year_end FROM experiences")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var experiences []models.Experience
	for rows.Next() {
		var e models.Experience
		if err := rows.Scan(&e.ID, &e.Title, &e.Description, &e.YearStart, &e.YearEnd); err != nil {
			return nil, err
		}
		experiences = append(experiences, e)
	}
	return experiences, nil
}

func (r *ExperienceRepository) Update(id int, exp *models.Experience) error {
	_, err := r.db.Exec(
		"UPDATE experiences SET title = ?, description = ?, year_start = ?, year_end = ? WHERE id = ?",
		exp.Title, exp.Description, exp.YearStart, exp.YearEnd, id,
	)
	return err
}

