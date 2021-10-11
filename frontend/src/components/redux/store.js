import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers'



const reducers = combineReducers({
  cart: cartReducer,
  getProductDetails: getProductDetailsReducer,
  getProducts: getProductsReducer
})
const middleware = [thunk]
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store