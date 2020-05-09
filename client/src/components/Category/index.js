import React from "react";

import "./style.css";

function Category(props) {
  const category = props.category.split(" ");

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="category-border mt-2 p-2" id={category[0]}>
            <div className="row pb-2">
              <div className="col d-flex">
                <p className="category-icon flex-width">
                  <i class={props.icon}></i>
                </p>
                <div>
                  {props.items
                    ? props.items.map((item) => (
                        <p key={item._id}>
                          <span className="item-name">{item.name}</span>{" "}
                          <i class="fas fa-times-circle"></i>
                        </p>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
