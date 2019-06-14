INSERT INTO shopping_cart (user_id)
VALUES (${id})
RETURNING id;