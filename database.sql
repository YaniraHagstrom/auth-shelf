
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE item;
DROP TABLE "user";


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "user" ("username", "password")
    VALUES 
    ('unicorn10', '$2a$10$iTxprUwVau8.gk/08EV/pu9P5nlTft0Hw4654zff01wra6r/czbPm'), -- 123
    ('unicorn11', '$2a$10$/f5TlywZ49RKwt1VyyU/J.Jdbg8bsfg1Vp97jaZbmdJa2eK4Joizq'); -- 456


INSERT INTO item ("description", "image_url", "user_id")
	VALUES ('this is a really boring book', 'https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612', 1);

