import React, { useState, useEffect } from "react";

// utils
import API from "./utils/API";

// components
import Header from "./components/Header";
import Category from "./components/Category";
import ItemForm from "./components/ItemForm";
import Footer from "./components/Footer";

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
      <div id="main-content">
        <Header />
        <section>
          <div className="container">
            {produce[0] ? (
              <Category
                category="Produce"
                items={produce}
                icon="fas fa-apple-alt"
              />
            ) : null}
            {meats[0] ? (
              <Category category="Meats" items={meats} icon="fas fa-fish" />
            ) : null}
            {dryGoods[0] ? (
              <Category
                category="Dry Goods"
                items={dryGoods}
                icon="fas fa-bread-slice"
              />
            ) : null}
            {refrigerated[0] ? (
              <Category
                category="Refrigerated"
                items={refrigerated}
                icon="fas fa-ice-cream"
              />
            ) : null}
            {other[0] ? (
              <Category
                category="Other"
                items={other}
                icon="fas fa-toilet-paper"
              />
            ) : null}
          </div>
        </section>
        <ItemForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
