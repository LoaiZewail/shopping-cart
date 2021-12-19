import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import NavBar from "./navbar";
import ShoppingCart from "./shoppingCart";
import Home from "./home";
import ProductDetails from "./productDetails";
import Menu from "./menu";
import NotFound from "./notFound";
import Login from "./login";
import Admin from "./admin";
import ProductForm from "./ProductForm";
import About from './about';

class App extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    let { data } = await axios.get(
      "http://localhost:3000/products"
    );
    console.log(data)

    this.setState({ products: data });
  }

  // async componentDidUpdate() {
  //   let { data } = await axios.get(
  //     "http://localhost:3000/products"
  //   );
  //   this.setState({ products: data });
  // }

  handleDelete = async (product) => {

    if (confirm("Are you sure ?")) {

      //Optimistic...
      const oldProducts = [...this.state.products];

      const products = this.state.products.filter((p) => p.id !== product.id);
      this.setState({ products });

      try {
        await axios.delete(
          "http://localhost:3000/products/" + product.id
        );
      } catch (ex) {
        toast("Can't Delete");
        this.setState({ products: oldProducts });
      }
    }
    else return
  };

  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };

  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };

  handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="background container-fluid">
          <Switch>
            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />

            <Route
              path="/productform/:id"
              render={(props) => (
                <ProductForm {...props} products={this.state.products} />
              )}
            />

            <Route
              path="/admin"
              render={(props) => (
                <Admin
                  {...props}
                  products={this.state.products}
                  onDelete={this.handleDelete}
                />
              )}
            />

            <Route path="/login" component={Login} />

            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.handleInCartChange}
                  onReset={this.handleReset}
                  {...props}
                />
              )}
            />

            <Route path="/notfound" component={NotFound} />

            <Route path="/about" component={About} />

            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  {...props}
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                />
              )}
            />
            <Route path="/home" exact component={Home} />

            <Redirect from="/" to="/home" />

            <Redirect to="/notfound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
