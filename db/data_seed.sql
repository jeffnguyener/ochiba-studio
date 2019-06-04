CREATE TABLE users {
  user_id INTEGER SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone INTEGER,
  email VARCHAR(100),
  password TEXT,
  avatar TEXT
}

CREATE TABLE shopping_cart {
  id INTEGER,
  user_id INTEGER
}

CREATE TABLE item {
  cart_id INTEGER,
  item_name VARCHAR(50),
  description VARCHAR(200),
  quantity INTEGER,
  price INTEGER
}

CREATE TABLE products {
  product_id INTEGER SERIAL PRIMARY KEY,
  product_name VARCHAR(60),
  product_description VARCHAR(200),
  price INTEGER
}

CREATE TABLE gallery {
  user_id INTEGER,
  image TEXT,
  image_id INTEGER SERIAL PRIMARY KEY
}

CREATE TABLE messages {
  id INTEGER.
  sender_id INTEGER,
  recepient_id INTEGER,
  body_msg VARCHAR(500),
  date DATETIME
}