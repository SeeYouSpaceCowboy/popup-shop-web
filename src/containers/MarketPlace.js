import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchProducts } from '../actions/productsActions'

class MarketPlace extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products } = this.props

    return (
      <div>
        { products.map(product => <div key={ product._id }>{ product.name } <button>Add ${ product.price }</button></div>) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace)
