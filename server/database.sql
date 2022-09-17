CREATE DATABASE pernstack;

\c pernstack
\l
\dt

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);