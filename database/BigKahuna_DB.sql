DROP DATABASE IF EXISTS bigkahuna_DB;

CREATE DATABASE bigkahuna_DB;

USE bigkahuna_DB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);