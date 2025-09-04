import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/navbar.sass";

export default function NavBar() {
  return (
    <div className="navBar-container">
      <p className="navbar-title">Cinema</p>
      <div className="navBar-links">
        <Link to="/">
          <p>Top Movies</p>
        </Link>
        <Link to="/series">
          <p>Top Series</p>
        </Link>
        <Link to="/search">
          <p>Search Movies</p>
        </Link>
        <Link to="/favorites">
          <p>Your Favorites</p>
        </Link>
      </div>
    </div>
  );
}
