-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS about (
  id INTEGER PRIMARY KEY,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS experiences (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  year_start TEXT NOT NULL,
  year_end TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS education (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  year TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS hero_title (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS badges (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS projects(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  project_url TEXT NOT NULL,
  github_url TEXT NOT NULL
);

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS about;
DROP TABLE IF EXISTS experiences;
DROP TABLE IF EXISTS education;
DROP TABLE IF EXISTS hero_title;
DROP TABLE IF EXISTS badges;
DROP TABLE IF EXISTS projects;
-- +goose StatementEnd
