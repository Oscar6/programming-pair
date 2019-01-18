DROP TABLE author,category,blog,comments;

CREATE TABLE author(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(15),
    lname VARCHAR(15),
    bio VARCHAR,
    img_path VARCHAR
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE blog(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    category VARCHAR,
    body VARCHAR
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    username VARCHAR(15),
    post_date DATE,
    blogID INTEGER REFERENCES blog(id),
    body VARCHAR,
    visible BOOLEAN
);