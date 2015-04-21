CREATE DATABASE card_database;
\c card_database;

CREATE TABLE cards(id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255));
