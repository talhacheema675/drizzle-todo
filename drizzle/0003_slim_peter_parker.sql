CREATE TABLE IF NOT EXISTS "todonew" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" varchar(256),
	"status" boolean DEFAULT false NOT NULL
);
