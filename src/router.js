import React from 'react'
import { Switch, Route } from 'react-router-dom'

//NAVBAR ROUTES
import Home from './Components/Home/Home'
import AboutUs from './Components/About/AboutUs';
import Portfolio from './Components/Portfolio/Portfolio'
import Pricing from './Components/Pricing/Pricing'
import Blog from './Components/Blog/Blog'

//USER ROUTES
import Login from './Components/Login/Login'
import Details from './Components/UserProfile/Details'
import UserProfile from './Components/UserProfile/UserProfile'
import Register from './Components/Register/Register'
import UserMessages from './Components/UserProfile/UserMessages'
import UserGallery from './Components/UserProfile/UserGallery'

//SHOPPING ROUTES
import Cart from '../src/Components/Shopping/Shopping'
import Checkout from './Components/Shopping/ShoppingCheckout'

//PORTFOLIO ROUTES
import Wedding from './Components/Portfolio/Wedding'
import Engagement from './Components/Portfolio/Engagement'
import Portraits from './Components/Portfolio/Portraits'
import Maternity from './Components/Portfolio/Maternity'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/blog' component={Blog} />

        <Route path='/login' component={Login} />
        <Route path='/details' component={Details} />
        <Route path='/profile' component={UserProfile} />
        <Route path='/register' component={Register} />
        <Route path='/messages' component={UserMessages} />
        <Route path='/gallery' component={UserGallery} />

        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />

        <Route path='/wedding' component={Wedding} />
        <Route path='/engagement' component={Engagement} />
        <Route path='/portraits' component={Portraits} />
        <Route path='/maternity' component={Maternity} />
    </Switch>
)