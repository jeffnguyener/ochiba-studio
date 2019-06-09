import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/shoppingReducer';

class Pricing extends Component {
    state = {
        products: [],
        selectedPackage: {}
    }

    componentDidMount(){
        axios.get('/shopping/items')
        .then((res)=> this.setState({products: res.data}))
    }

    handleAddItem = (id) => {
        console.log('the id is', id)
    }

    render(){
       const items = this.state.products.map(product => {
           return (
               <div key={product.product_id}>
                   <h1>Package: {product.product_name}</h1>
                   <h5>Description: {product.product_description} </h5>
                   <h5>Price: {product.price}</h5>
                   <button onClick={() => this.props.addToCart(product)}>Add To Cart</button>
               </div>
           )
       })

        return (
            <>
                {items}
            </>
        )
    }
}

export default connect(null, {addToCart})(Pricing);