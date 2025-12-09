package models

type About struct {
	ID          int    `json:"id" db:"id"`
	Description string `json:"description" db:"description" binding:"required"`
}

type Experience struct {
	ID          int    `json:"id" db:"id"`
	Title       string `json:"title" db:"title" binding:"required"`
	Description string `json:"description" db:"description" binding:"required"`
	YearStart   string `json:"year_start" db:"year_start" binding:"required"`
	YearEnd     string `json:"year_end" db:"year_end" binding:"required"`
}

type Education struct {
	ID          int    `json:"id" db:"id"`
	Title       string `json:"title" db:"title" binding:"required"`
	Description string `json:"description" db:"description" binding:"required"`
	Year        string `json:"year" db:"year" binding:"required"`
}

type HeroTitle struct {
	ID          int    `json:"id" db:"id"`
	Name        string `json:"name" db:"name" binding:"required"`
	Description string `json:"description" db:"description" binding:"required"`
}

type Badge struct {
	ID    int    `json:"id" db:"id"`
	Title string `json:"title" db:"title" binding:"required"`
}

type Project struct {
	ID          int    `json:"id" db:"id"`
	Title       string `json:"title" db:"title" binding:"required"`
	Description string `json:"description" db:"description" binding:"required"`
	ImageURL    string `json:"image_url" db:"image_url" binding:"required"`
	ProjectURL  string `json:"project_url" db:"project_url" binding:"required"`
	GithubURL   string `json:"github_url" db:"github_url" binding:"required"`
}
