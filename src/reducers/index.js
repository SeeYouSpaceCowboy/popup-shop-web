import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import productsReducer from './productsReducer'
// import userReducer from './userReducer'

const rootReducer = combineReducers({
  form: formReducer,
  // user: userReducer,
  products: productsReducer
})

export default rootReducer
