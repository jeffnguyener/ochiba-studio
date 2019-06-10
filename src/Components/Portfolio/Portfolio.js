import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Portfolio extends Component{
    render(){
        return(
            <div>
                <Link to='/'>Wedding</Link>
                <Link to='/'>Engagement</Link>
                <Link to='/'>Portraits</Link>
                <Link to='/'>Maternity</Link>
            </div>
        )
    }
}

export default Portfolio;