import React, { useState, useEffect } from "react";

// utils
import API from "./utils/API";

// components
import Header from "./components/Header";
import Category from "./components/Category";
import ItemForm from "./components/ItemForm";
import Footer from "./components/Footer";
import Success from "./components/Success";
import Error from "./components/Error";

function App() {
  const [produce, setProduce] = useState([]);
  const [meats, setMeats] = useState([]);
  const [dryGoods, setDryGoods] = useState([]);
  const [refrigerated, setRefrigerated] = useState([]);
  const [other, setOther] = useState([]);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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

  const handleSubmit = (e, name, category) => {
    e.preventDefault();
    if (name.trim() === "" || category.trim() === "") {
      setSuccess(false);
      setError(true);
      return;
    }
    const submitItem = {
      name,
      category,
    };
    API.createItem(submitItem)
      .then((res) => {
        loadGroceries(category);
        setError(false);
        setSuccess(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="main-content">
        <Header />
        <section>
          <div className="container">
            {produce[0] && (
              <Category
                category="Produce"
                items={produce}
                icon="fas fa-apple-alt"
              />
            )}
            {meats[0] && (
              <Category category="Meats" items={meats} icon="fas fa-fish" />
            )}
            {dryGoods[0] && (
              <Category
                category="Dry Goods"
                items={dryGoods}
                icon="fas fa-bread-slice"
              />
            )}
            {refrigerated[0] && (
              <Category
                category="Refrigerated"
                items={refrigerated}
                icon="fas fa-ice-cream"
              />
            )}
            {other[0] && (
              <Category
                category="Other"
                items={other}
                icon="fas fa-toilet-paper"
              />
            )}
          </div>
        </section>
        <ItemForm submit={handleSubmit} />
        {success && <Success />}
        {error && <Error />}
      </div>
      <Footer />
    </>
  );
}

export default App;
