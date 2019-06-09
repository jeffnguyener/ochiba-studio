const initialState = {
  cart: []
};

const ADD_TO_CART = "ADD_TO_CART";
const GET_SAVED_ITEMS = "GET_SAVED_ITEMS";

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

export default function shoppingReducer(state = initialState, action) {
  // write a case to add the product to the cart
  switch (action.type) {
    case ADD_TO_CART:
      const newCartArr = state.cart.slice();
      newCartArr.push(action.payload);

      return { ...state, cart: newCartArr };
    // return {...state, cart: [...state.cart, action.payload]}
    case GET_SAVED_ITEMS: 
        return {...state, cart: action.payload}
    default:
      return state;
  }
}
