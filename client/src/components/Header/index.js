import React from "react";

function Header() {
  return (
    <header className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p
              className="mt-3"
              style={{
                fontFamily: "Covered By Your Grace, cursive",
                fontSize: "45px",
              }}
            >
              Grocery List
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
