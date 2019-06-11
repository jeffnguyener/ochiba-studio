require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const cors = require('cors')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env
const app = express()

const auth_ctrl = require('./controllers/auth_controller')
const shop_ctrl = require('./controllers/shopping_controller')
const s3_ctrl = require('./controllers/s3_controller')

app.use(cors())
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.get('/auth/userdetails', auth_ctrl.getUserDetails)
app.get('/auth/messages', auth_ctrl.getUserMessages)
app.get('/auth/logout', auth_ctrl.logout)

app.get('/shopping/items', shop_ctrl.getItems)

app.post('/getSignedUrl', s3_ctrl.getSignedURL)
  


massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('Database is running 👌', database.listTables())
    app.listen(SERVER_PORT, () => console.log(`Speeding through port ${SERVER_PORT}`))
})