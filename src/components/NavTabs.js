import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        {props.currentPage === "Home" ? (
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className="nav-link active"
          >
            Home
          </a>
        ) : (
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className="nav-link"
          >
            Home
          </a>
        )}
      </li>
      <li className="nav-item">
        {props.currentPage === "About" ? (
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className="nav-link active"
          >
            About
          </a>
        ) : (
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className="nav-link"
          >
            About
          </a>
        )}
      </li>
      <li className="nav-item">
        {props.currentPage === "Blog" ? (
          <a
            href="#blog"
            onClick={() => props.handlePageChange("Blog")}
            className="nav-link active"
          >
            Blog
          </a>
        ) : (
          <a
            href="#blog"
            onClick={() => props.handlePageChange("Blog")}
            className="nav-link"
          >
            Blog
          </a>
        )}
      </li>
      <li className="nav-item">
        {props.currentPage === "Contact" ? (
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className="nav-link active"
          >
            Contact
          </a>
        ) : (
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className="nav-link"
          >
            Contact
          </a>
        )}
      </li>
    </ul>
  );
}

export default NavTabs;
