import React from "react";

function Category(props) {
  return (
    <>
      <p>
        <i class={props.icon}></i>
      </p>
      <p>This is the {props.category} category</p>
      <ul>
        {props.items
          ? props.items.map((item) => <li key={item._id}>{item.name}</li>)
          : null}
      </ul>
    </>
  );
}

export default Category;
