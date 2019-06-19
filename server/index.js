require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const cors = require('cors')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const app = express()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const bodyParser = require('body-parser')

const auth_ctrl = require('./controllers/auth_controller')
const shop_ctrl = require('./controllers/shopping_controller')
const s3_ctrl = require('./controllers/s3_controller')

app.use( express.static( `${__dirname}/../build` ) );

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

//GET ENDPOINTS
app.get('/auth/userdetails', auth_ctrl.getUserDetails)
app.get('/auth/messages', auth_ctrl.getUserMessages)
app.get('/auth/logout', auth_ctrl.logout)
app.get('/auth/usergallery', auth_ctrl.getUserGallery)

app.get('/shopping/products', shop_ctrl.getProducts)


//POST ENDPOINTS
app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.post('/update/user/avatar', auth_ctrl.updateAvatar)

app.post('/add/user/cart', shop_ctrl.addItem)
app.post('/getSignedUrl', s3_ctrl.getSignedURL)

//PUT ENDPOINTS
app.put('/auth/updateprofile', auth_ctrl.updateUserProfile)

//DELETE ENDPOINTS
app.delete('/update/user/deleteavatar', auth_ctrl.deleteAvatar)

//STRIPE CHECKOUT
app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      } 
    }
    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: `${product.description}`
  }, function(err, charge) {
      if (err) return res.sendStatus(500)
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });



massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('Database is running 👌', database.listTables())
    app.listen(SERVER_PORT, () => console.log(`Speeding through port ${SERVER_PORT}`))
})