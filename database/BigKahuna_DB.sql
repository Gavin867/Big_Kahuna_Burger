DROP DATABASE IF EXISTS bigkahuna_DB;

CREATE DATABASE bigkahuna_DB;

USE bigkahuna_DB;

CREATE TABLE hamburgers
(
	hamburger_id int NOT NULL AUTO_INCREMENT,
	hamburger_name varchar(255) NOT NULL,
	hamburger_devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (hamburger_id)
);