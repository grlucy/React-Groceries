import React, { Component } from "react";

import Header from "./components/Header";
import Category from "./components/Category";
import ItemForm from "./components/ItemForm";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Category category="Produce" />
        <Category category="Meats" />
        <Category category="Dry Goods" />
        <Category category="Refrigerated" />
        <Category category="Other" />
        <ItemForm />
      </>
    );
  }
}

export default App;
