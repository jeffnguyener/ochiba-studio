import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import AboutUs from './Components/About/AboutUs';
import Portfolio from './Components/Portfolio/Portfolio'
import Pricing from './Components/Pricing/Pricing'
import Blog from './Components/Blog/Blog'
import Cart from '../src/Components/Shopping/Shopping'
import Details from './Components/Details'
import UserProfile from './Components/UserProfile/UserProfile'
import Register from './Components/Register'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/blog' component={Blog} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/profile' component={UserProfile} />
        <Route path='/register' component={Register} />
    </Switch>
)