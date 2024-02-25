-- These are the basic queries to get the data from the database

CREATE TABLE categories (
category_id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT);

INSERT INTO categories (name, description) VALUES
 ('Cacti & Succulents', 'Water-storing plants with unique shapes and colors'),
  ('Vegetables', 'Outdoor plants , faaling under vegetables'),
  ('Herbs', 'Plants used for culinary, medicinal, or aromatic purposes'),
   ('Orchids', 'Exotic flowering plants with stunning blooms'),
  ('Foliage Plants', 'Plants known for their attractive leaves and greenery'),
  ('Flowering Plants', 'Shrubs that produce vibrant flowers');
  
  
  CREATE TABLE plants (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories(category_id),
  common_name VARCHAR(255) NOT NULL,
  scientific_name VARCHAR(255),
  description TEXT,
  image_url VARCHAR(255)
);
  
  
ALTER TABLE categories ADD COLUMN image_url VARCHAR(255);


UPDATE categories set image_url='https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' where category_id=1;
UPDATE categories set image_url='https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' where category_id=2;
UPDATE categories set image_url='https://images.unsplash.com/photo-1532091710512-26fd3b2dcf16?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' where category_id=3;
UPDATE categories set image_url='https://images.unsplash.com/photo-1612528906318-cc0153dbf0c4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' where category_id=4;
UPDATE categories set image_url='https://images.unsplash.com/photo-1536837289209-12ad2b8b43bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' where category_id=5;
UPDATE categories set image_url='https://images.unsplash.com/photo-1695146904089-bf0caf2d8ecd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' where category_id=6;
