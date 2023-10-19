CREATE Table country(
    id_country SERIAL PRIMARY KEY,
    name varchar(50),
    transport_emission NUMERIC(5,2),
    diet_emission NUMERIC(5,2),
    electricity_emission NUMERIC(5,2),
    waste_emision NUMERIC(5,2)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    id_country int REFERENCES country(id_country) ON DELETE CASCADE ON UPDATE CASCADE
);