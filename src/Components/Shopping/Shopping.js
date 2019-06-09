import React, { Component } from 'react'
import { connect } from 'react-redux';


class Shopping extends Component {
    render() {
        const items = this.props.cart.map(product => {
            return (
                <div key={product.product_id}>
                    <h1>Package: {product.product_name}</h1>
                    <h5>Description: {product.product_description} </h5>
                    <h5>Price: {product.price}</h5>
                    <button>Remove</button>
                </div>
            )
        })
        return (
            <div>
                {items}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.shoppingReducer.cart
    }
}

export default connect(mapStateToProps)(Shopping);