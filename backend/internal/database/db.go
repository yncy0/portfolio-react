package database

import (
	"database/sql"
	"log"

	_ "modernc.org/sqlite"
)

type Database struct {
	DB *sql.DB
}

func NewDatabase(dbPath string) (*Database, error) {
	db, err := sql.Open("sqlite", dbPath)
	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	log.Println("Database connected successfully")
	return &Database{DB: db}, nil
}

func (d *Database) Close() error {
	return d.DB.Close()
}
