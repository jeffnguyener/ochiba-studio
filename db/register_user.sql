INSERT INTO users (first_name, last_name, phone, email, password)
VALUES (${first_name}, ${last_name}, ${phone}, ${email}, ${password})
RETURNING user_id, email;