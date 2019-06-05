SELECT first_name, last_name, email, user_id, phone, avatar
FROM users
JOIN messages ON messages.messages.id = users.user_id
WHERE user_id = ${id};