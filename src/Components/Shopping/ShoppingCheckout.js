import React, { Component } from "react";
import axios from 'axios'
import { connect } from "react-redux";
// import { removeItem, clearCart } from '../../redux/shoppingReducer'
import StripeCheckout from "react-stripe-checkout";

import "./Shopping.css";

function handleToken(token) {
  console.log(token);
}

class ShoppingCheckout extends Component {
    state = {
        products: [],
      };
    
      componentDidMount() {
        axios
          .get("/shopping/products")
          .then(res => this.setState({ products: res.data }));
      }
  render() {
      console.log(this.state)
    return (
      <div className="shopping-cart-form">
        <div className="product-cart">${this.props.products}</div>
        <StripeCheckout
          stripeKey="pk_test_vlelgF6jTCOZAOS87krO88Db00M4h8kal7"
          token={handleToken}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
      cart: reduxState.shoppingReducer.cart
  };
}
export default connect(mapStateToProps)(ShoppingCheckout);
