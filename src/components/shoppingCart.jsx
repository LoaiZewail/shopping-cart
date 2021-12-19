import React, { Component } from "react";

import Product from "./product";

class ShoppingCart extends Component {

  render() {
    return (
      <React.Fragment>
        <main className="container">

          <h1 className="text-center mb-4">Shopping Cart</h1>
          <button
            onClick={this.props.onReset}
            className="btn btn-secondary btn-sm m-2"
          >
            Reset
          </button>
          {this.props.products.map(product => (
            <Product
              key={product.id}
              product={product}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            />
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
