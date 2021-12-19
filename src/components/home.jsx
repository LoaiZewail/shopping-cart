import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {

    return (

      <React.Fragment>
        <main className="container">

          <div className="overlay"></div>
          <div className="heading">
            <h1 className="w-100 text-center mb-4">Home</h1>
            <div className="container ">
              <p className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus iste, sunt similique placeat rerum, in sed nulla fuga sapiente ad, voluptates perspiciatis hic vitae est consequuntur earum adipisci quod.
              </p>
            </div>
            <div className="text-center">
              <img src={require("../assets/shopping-cart.png")} className="mx-auto d-block" width={300} />
            </div>
          </div>
        </main>
      </React.Fragment>
    );;
  }
}

export default Home;
