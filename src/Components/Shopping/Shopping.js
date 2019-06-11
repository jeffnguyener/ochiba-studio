import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../../redux/shoppingReducer";

import "./Shopping.css";

const Button = styled.button`
  font-family: sans-serif;
  font-size: 16px;
  border: none;
  padding: 3px 8px;
  background: lightgray;
  color: white;

  &:hover {
    background: black;
    cursor: pointer;
  }
`;

// handleClearCart = () => {
    
// }

class Shopping extends Component {
  render() {
    const items = this.props.cart.map(product => {
      return (
          <div key={product.product_id}>
            <h2>Package: {product.product_name}</h2>
            <div className="description">Description:</div> {product.product_description} 
            <h4>Price: ${product.price}</h4>
            <Button onClick={this.handleClearCart}>Remove</Button>
            <span>
                <br /><br />
            </span>
            <div className="break"></div>
          </div>
      );
    });
    return <div><h1 className="shoppingcart">Shopping Cart</h1>
    <div className="cart-form">
    {items}
    </div>
    </div>
    ;
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.shoppingReducer.cart
  };
}

const mapDispatchToProps = {
  clearCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shopping);
