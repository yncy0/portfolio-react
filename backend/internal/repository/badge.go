package repository

import (
	"database/sql"
	"github.com/yncy0/portfolio-react/internal/models"
)

type BadgeRepository struct {
	db *sql.DB
}

func NewBadgeRepository(db *sql.DB) *BadgeRepository {
	return &BadgeRepository{db: db}
}

func (r *BadgeRepository) GetAll() ([]models.Badge, error) {
	rows, err := r.db.Query("SELECT id, title FROM badges")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var badges []models.Badge
	for rows.Next() {
		var b models.Badge
		if err := rows.Scan(&b.ID, &b.Title); err != nil {
			return nil, err
		}
		badges = append(badges, b)
	}
	return badges, nil
}

func (r *BadgeRepository) Update(id int, badge *models.Badge) error {
	_, err := r.db.Exec(
		"UPDATE badges SET title = ? WHERE id = ?",
		badge.Title, id,
	)
	return err
}
