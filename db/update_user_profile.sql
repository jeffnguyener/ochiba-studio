UPDATE users
SET first_name = ${first_name},
    last_name = ${last_name},
    phone = ${phone},
    email = ${email},
    password = ${password}
WHERE user_id = ${id}