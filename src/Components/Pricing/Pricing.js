import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../../redux/shoppingReducer";
import styled from "styled-components";

import "./Pricing.css";

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

class Pricing extends Component {
  state = {
    products: [],
    selectedPackage: {}
  };

  componentDidMount() {
    axios
      .get("/shopping/products")
      .then(res => this.setState({ products: res.data }));
  }

  handleAddItem = id => {
    console.log("the id is", id);
  };

  addItemToCart = (product) => {
    this.props.addToCart(product)
    const {cart} = this.props.shoppingReducer
    axios.post('/shopping/additem', {cart}).then(response => {
      console.log(response.data)
    }) 
  }

  render() {
    console.log(this.props)
    const items = this.state.products.map(product => {
      return (
        <div key={product.product_id}>
          <h1>{product.product_name}</h1>
          <div className="description">Description:</div> {product.product_description} 
          <h4>Price: ${product.price}</h4>
          <Button onClick={() => this.props.addToCart(product)}>
            Add To Cart
          </Button>
          <span>
            <br />
            <br />
          </span>
          <div className="break" />
        </div>
      );
    });

    return <div><h1 className="pricing">Pricing</h1>
    <div className="pricing-form">{items}</div>
    </div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { addToCart }
)(Pricing);
