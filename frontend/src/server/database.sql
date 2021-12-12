CREATE DATABASE users;

CREATE TABLE accounts(
    id SERIAL PRIMARY KEY,
    username varchar(18),
    password varchar(28),
    phone int(8)
);

CREATE TABLE ducks(
    id SERIAL PRIMARY KEY,
    duck_id int(255),
    user_id int(255)
);