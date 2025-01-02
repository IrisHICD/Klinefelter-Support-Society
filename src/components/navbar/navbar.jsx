import React from "react";
import "./navbar.scss";

function navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Klinefelter Support Society</h1>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
