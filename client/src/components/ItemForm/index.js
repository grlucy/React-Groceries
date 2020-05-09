import React from "react";

function ItemForm() {
  return (
    <section className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="p-2">
              <p
                className="mb-2"
                style={{
                  fontFamily: "Covered By Your Grace, cursive",
                  fontSize: "35px",
                }}
              >
                Add an item!
              </p>
              <form>
                <div className="form-row">
                  <div className="col-sm-6 mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Item"
                    />
                  </div>
                  <div className="col-sm-4 mb-2">
                    <select className="custom-select">
                      <option selected>Category...</option>
                      <option>Produce</option>
                      <option>Meats</option>
                      <option>Dry Goods</option>
                      <option>Refrigerated</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-sm mb-2">
                    <button
                      type="submit"
                      className="btn btn-dark text-light font-weight-bold"
                      style={{ width: "100%" }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemForm;
