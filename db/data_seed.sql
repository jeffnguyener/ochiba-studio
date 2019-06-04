CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone INTEGER,
  email VARCHAR(100),
  password TEXT,
  avatar TEXT
);

CREATE TABLE shopping_cart (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE item (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES shopping_cart(id),
  item_name VARCHAR(50),
  description VARCHAR(200),
  quantity INTEGER,
  price INTEGER
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(50),
  product_description VARCHAR(200),
  price INTEGER
);

CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  image TEXT
);

CREATE TABLE images (
    img_id SERIAL PRIMARY KEY,
    img TEXT,
    gallery_id INTEGER REFERENCES gallery(id)
);

CREATE TABLE messages (
  id INTEGER,
  sender_id INTEGER REFERENCES users(user_id),
  recepient_id INTEGER REFERENCES users(user_id),
  body_msg VARCHAR(500),
  date TEXT
);