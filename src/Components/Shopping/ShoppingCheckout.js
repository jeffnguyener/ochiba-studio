import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  removeItem,
  clearCart,
  getSavedItem,
  getTotal
} from "../../redux/shoppingReducer";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

import "./Shopping.css";

const Button = styled.button`
  font-family: sans-serif;
  font-size: 16px;
  border: none;
  padding: 3px 8px;
  background: lightgray;
  color: black;

  &:hover {
    background: black;
    color: lightgray;
    cursor: pointer;
  }
`;


class ShoppingCheckout extends Component {
  state = {
    products: [],
    total: []
  };

  onToken = token => {
    token.card = void 0;
    console.log("token", token);
    axios
      .post("/api/payment", { token, amount: 1000 })
      .then(response => {
        alert("Purchased!");
      });
  };
  
  componentDidMount() {
    axios
      .get("/shopping/products")
      .then(res => this.setState({ cart: res.data }));
  }


  render() {
    const items = this.props.cart.map(product => {
      return (
        <div key={product.product_id}>
          <h2>{product.product_name}</h2>
          <div className="description">Description:</div>{" "}
          {product.product_description}
          <h4>Price: ${product.price}</h4>
          <Button onClick={() => this.props.removeItem(product)}>Remove</Button>
          <span>
            <br />
            <br />
          </span>
          <div className="break" />
        </div>
      );
    });
    return (
      <div className="shopping-cart-form">
        {items}
        <div className="product-cart">${this.props.getTotal}</div>
        <StripeCheckout
          name="Ochiba Studio"
          description="We will contact you within 24 hours."
          image="https://os-personal-project.s3-us-west-1.amazonaws.com/ochiba2013_blk.PNG"
          label="Purchase!"
          stripeKey="pk_test_vlelgF6jTCOZAOS87krO88Db00M4h8kal7"
          token={this.onToken}
          amount={1000}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.shoppingReducer.cart,
    price: reduxState.shoppingReducer.price
  };
}

const mapDispatchToProps = {
  removeItem,
  clearCart,
  getSavedItem,
  getTotal
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCheckout);
