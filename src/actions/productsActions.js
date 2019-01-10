export const fetchProducts = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: [
        {
          _id: "0",
          name: "loading",
          price: "0.00"
        }
      ]
    })

    setTimeout(() => {
      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: [
          {
            _id: "01E3",
            name: "Anker PowerBank",
            price: 24.99
          },
          {
            _id: "01E4",
            name: "USB Type-C Cable",
            price: 9.99
          }
        ]
      })
    }, 1800)
  }
}
