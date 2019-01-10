const initialState = {
  current: {},
  all: []
}

export default function productsReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, all: action.payload }
    case 'CREATE_PRODUCT':
      return { ...state, all: [ action.payload, ...state.all ] }
    case 'DELETE_PRODUCT':
      return { ...state, all: state.all.filter(product => product._id !== action.payload._id) }
    case 'SET_CURRENT_PRODUCT':
      return { ...state, current: state.all.find(product => product._id === action.payload) }
    default: return state
  }
}
