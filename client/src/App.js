import React, { Component, useState, useEffect } from "react";

// utils
import API from "./utils/API";

// components
import Header from "./components/Header";
import Category from "./components/Category";
import ItemForm from "./components/ItemForm";

function App() {
  const [produce, setProduce] = useState([]);
  const [meats, setMeats] = useState([]);
  const [dryGoods, setDryGoods] = useState([]);
  const [refrigerated, setRefrigerated] = useState([]);
  const [other, setOther] = useState([]);

  const loadGroceries = (category) => {
    switch (category) {
      case "Produce":
        API.getCategoryItems("Produce")
          .then((res) => setProduce(res.data.items))
          .catch((err) => console.log(err));
        break;
      case "Meats":
        API.getCategoryItems("Meats")
          .then((res) => setMeats(res.data.items))
          .catch((err) => console.log(err));
        break;
      case "Dry Goods":
        API.getCategoryItems("Dry Goods")
          .then((res) => setDryGoods(res.data.items))
          .catch((err) => console.log(err));
        break;
      case "Refrigerated":
        API.getCategoryItems("Refrigerated")
          .then((res) => setRefrigerated(res.data.items))
          .catch((err) => console.log(err));
        break;
      case "Other":
        API.getCategoryItems("Other")
          .then((res) => setOther(res.data.items))
          .catch((err) => console.log(err));
        break;
      default:
        console.log("Invalid category");
    }
  };

  useEffect(() => {
    loadGroceries("Produce");
    loadGroceries("Meats");
    loadGroceries("Dry Goods");
    loadGroceries("Refrigerated");
    loadGroceries("Other");
  }, []);

  return (
    <>
      <Header />
      <Category category="Produce" items={produce} />
      <Category category="Meats" items={meats} />
      <Category category="Dry Goods" items={dryGoods} />
      <Category category="Refrigerated" items={refrigerated} />
      <Category category="Other" items={other} />
      <ItemForm />
    </>
  );
}

export default App;
