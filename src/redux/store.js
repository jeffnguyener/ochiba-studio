import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import shoppingReducer from './shoppingReducer'

const reducers = combineReducers({userReducer, shoppingReducer})

export default createStore(reducers)