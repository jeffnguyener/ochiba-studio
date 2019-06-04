const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { first_name, last_name, phone, email, password } = req.body
        console.log(password)
        const db = req.app.get('db')
        const { session } = req
        const userFound = await db.check_user_email({ email })
        if (userFound[0]) return res.status(409).send('Email already exists')
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const createUser = await db.register_user({ first_name, last_name, phone, email, password: hash })
        session.user = { id: createUser[0].user_id, email: createUser[0].email }
        res.status(200).send(session.user)
    },

}