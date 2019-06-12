const initialState = {
  cart: []
};

const ADD_TO_CART = "ADD_TO_CART";
const GET_SAVED_ITEMS = "GET_SAVED_ITEMS";
const REMOVE_ITEM = 'REMOVE_ITEM'
const CLEAR_CART = 'CLEAR_CART';

// Action that add the product into the cart
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function getSavedItem(savedItems){
    return {
        type: GET_SAVED_ITEMS,
        payload: savedItems
    }
}

export function removeItem(product){
    return {
      type: REMOVE_ITEM,
      payload: product
    }
}

export function clearCart(){
    return {
        type: CLEAR_CART
    }
}

export default function shoppingReducer(state = initialState, action) {
  // write a case to add the product to the cart
  switch (action.type) {
    case ADD_TO_CART:
      const newCartArr = state.cart.slice();
      newCartArr.push(action.payload);

      return { ...state, cart: newCartArr };
    // return {...state, cart: [...state.cart, action.payload]}
    case GET_SAVED_ITEMS: 
        return {...state, cart: action.payload};
    case REMOVE_ITEM:
        const { product_id } = action.payload
        const updatedCart = state.cart.filter(product => {
          return product.product_id !== product_id
        })
        return {...state, cart: updatedCart}
    case CLEAR_CART:
        return { ...state, cart: initialState.cart};
    default:
      return state;
  }
}
