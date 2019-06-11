const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { first_name, last_name, phone, email, password } = req.body
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
    login: async (req, res) => {
        const { email, password } = req.body
        console.log(email, password)
        const db = req.app.get('db')
        const { session } = req
        const userFound = await db.check_user_email({ email })
        if (!userFound[0]) return res.status(401).send('Email does not exist')
        const authenticated = bcrypt.compareSync(password, userFound[0].password)
        console.log(authenticated)
        if (authenticated) {
            session.user = { id: userFound[0].user_id, email: userFound[0].email }
            res.status(200).send(session.user)
        } else {
            return res.status(401).send('Email or password is incorrect')
        }
    },
    getUserDetails: async (req, res) => {
        const db = req.app.get('db')
        const { session } = req
        if (session.user) {
            const profileDetails = await db.get_userProfile_details({id: session.user.id})
            const { first_name, last_name, email, user_id, phone, avatar } = profileDetails[0]
            return res.status(200).send({first_name, last_name, email, user_id, phone, avatar, })
        }
        return res.status(401).send('Please Log In')
    },
    getUserMessages: async (req, res) => {
        const db = req.app.get('db')
        const { session } = req
        const result = await db.get_user_messages({id: session.user.id})
        return res.status(200).send(result)
    },
    logout: (req, res) => {
        // console.log(req.session)
        req.session.destroy()
        return res.status(200).send("logout")
    }

}