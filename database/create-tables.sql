DROP TABLE users_events;
DROP TABLE users_friends;
DROP TABLE notifications;
DROP TABLE users;
DROP TABLE events;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL UNIQUE,
	firstname VARCHAR(255),
	lastname VARCHAR(255),
	score BIGINT DEFAULT 0,
	latitude DOUBLE PRECISION NOT NULL,
	longitude DOUBLE PRECISION NOT NULL
);

CREATE TABLE events (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	latitude DOUBLE PRECISION NOT NULL,
	longitude DOUBLE PRECISION NOT NULL,
	date DATE NOT NULL
);

CREATE TABLE users_events (
	user_id BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	event_id BIGINT REFERENCES events(id) ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY(user_id, event_id)
);

CREATE TABLE users_friends (
	id_from BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	id_to BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY(id_from, id_to)
);

CREATE TABLE notifications (
	id SERIAL PRIMARY KEY,
	id_from BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	id_to BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	event_id BIGINT REFERENCES events(id) ON DELETE CASCADE ON UPDATE CASCADE
);

SELECT * FROM users;
SELECT * FROM events;
SELECT * FROM users_events;
SELECT * FROM users_friends;
SELECT * FROM notifications;


