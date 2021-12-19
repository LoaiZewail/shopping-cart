import React, { Component } from "react";

import qs from "query-string";

class ProductDetails extends Component {
  handleBack = () => {
    this.props.history.replace("/cart");
  };

  render() {
    const res = qs.parse(this.props.location.search);

    console.log(res);

    const product = this.props.products.filter(
      c => c.id === parseInt(this.props.match.params.id)
    )[0];
    return (
      <React.Fragment>
        <main className="container">

          <h1 className="text-center mb-4">Product Details</h1>
          <h2>{product.name}</h2>
          <h2>Count in Shopping Cart: {product.count}</h2>
          <button onClick={this.handleBack} className="btn btn-primary btn-sm">
            Back
          </button>
        </main>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
