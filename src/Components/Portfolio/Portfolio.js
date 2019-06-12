import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Portfolio.css'

class Portfolio extends Component{
    render(){
        return(
            <div className="box-container">
                <Link to='/wedding'>Wedding</Link>
                <Link to='/engagement'>Engagement</Link>
                <Link to='/portraits'>Portraits</Link>
                <Link to='/maternity'>Maternity</Link>
            </div>
        )
    }
}

export default Portfolio;