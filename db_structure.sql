

CREATE TABLE IF NOT EXISTS person (
  id UUID PRIMARY KEY,
  pseudonim VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  first_name VARCHAR(47),
  last_name VARCHAR(47),
  name VARCHAR(30),
  birth DATE
);

-- CREATE TABLE IF NOT EXISTS 

-- Insertation

INSERT INTO person (id, pseudonim, password, first_name, last_name, birth)
VALUES
('d351b32b-b8b4-4597-8894-273d68b85cb2', 'mazda', 'fast1!', 'erick', 'ostrovsky', '2005-01-17'),
('d78c3b8c-e1a7-4e23-96d4-73246903410c', 'magma', 'magma1', 'alex', 'romanov', '2005-04-23'),
('d2611cb0-505c-4cd7-bafa-0248b2052937', 'tester', 'tester', 'oleg', 'molchanov', '1997-04-05');
