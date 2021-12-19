import React from "react";
import Cart from "./cart";

const Menu = props => {
  return (
    <React.Fragment>
      <main className="container">

        <h1 className="text-center mb-4">Menu</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Cart onClick={props.onClick} product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
};

export default Menu;
