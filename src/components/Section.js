import React, { Component } from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Login from "./section/Login";
import Contact from "./section/Jacket";
import About from "./section/Topi";

export class Section extends Component {
  render() {
    return (
      <section>
        {/* <Route path="/" component={Login} exact>
          <Login />
        </Route> */}
        {/* <Route path="/" component={Products} exact /> */}
        <Route path="/product" component={Products} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
      </section>
    );
  }
}

export default Section;
