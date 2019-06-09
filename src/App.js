import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { HashRouter } from 'react-router-dom'
import router from './router'
import { connect } from 'react-redux'
import { getSavedItem } from './redux/shoppingReducer';

class App extends React.Component {
  componentDidMount(){
    if(localStorage.getItem('cart')){
      const savedItems = JSON.parse(localStorage.getItem('cart'))
      this.props.getSavedItem(savedItems)
    }

    window.onbeforeunload = () => {
      localStorage.setItem('cart', JSON.stringify(this.props.cart))
    }
  }

  render(){
    return (
      <HashRouter>
        <Navbar />
         {router}
      </HashRouter>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingReducer.cart
  }
}

export default connect(mapStateToProps, {getSavedItem})(App);
