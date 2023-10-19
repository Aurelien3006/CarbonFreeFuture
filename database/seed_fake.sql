-- Fake seed data for the "country" table
INSERT INTO country (name, transport_emission, diet_emission, electricity_emission, waste_emission)
VALUES ('USA', 3.5, 2.1, 1.8, 0.9),
       ('Canada', 2.9, 2.0, 1.6, 1.1),
       ('United Kingdom', 2.1, 1.7, 1.4, 0.8);


-- Fake seed data for the "users" table
INSERT INTO users (first_name, last_name, id_country)
VALUES ('John', 'Doe', 1),
       ('Jane', 'Smith', 1),
       ('Alice', 'Johnson', 2),
       ('Bob', 'Wilson', 3);
-- Add more users as needed