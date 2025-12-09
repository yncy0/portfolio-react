package repository

import (
	"database/sql"
	"github.com/yncy0/portfolio-react/internal/models"
)

type ProjectRepository struct {
	db *sql.DB
}

func NewProjectRepository(db *sql.DB) *ProjectRepository {
	return &ProjectRepository{db: db}
}

func (r *ProjectRepository) GetAll() ([]models.Project, error) {
	rows, err := r.db.Query("SELECT id, title, description, image_url, project_url, github_url FROM projects")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var projects []models.Project
	for rows.Next() {
		var p models.Project
		if err := rows.Scan(&p.ID, &p.Title, &p.Description, &p.ImageURL, &p.ProjectURL, &p.GithubURL); err != nil {
			return nil, err
		}
		projects = append(projects, p)
	}
	return projects, nil
}

func (r *ProjectRepository) Create(project *models.Project) (int64, error) {
	result, err := r.db.Exec(
		"INSERT INTO projects (title, description, image_url, project_url, github_url) VALUES (?, ?, ?, ?, ?)",
		project.Title, project.Description, project.ImageURL, project.ProjectURL, project.GithubURL,
	)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
}

