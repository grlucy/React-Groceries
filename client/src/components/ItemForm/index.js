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
                    <select className="custom-select" defaultValue="">
                      <option value="" disabled hidden>
                        Category...
                      </option>
                      <option value="Produce">Produce</option>
                      <option value="Meats">Meats</option>
                      <option value="Dry Goods">Dry Goods</option>
                      <option value="Refrigerated">Refrigerated</option>
                      <option value="Other">Other</option>
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
