CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
