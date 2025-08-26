import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/series">
        <p>Series</p>
      </Link>
      <Link to="/search">
        <p>Search</p>
      </Link>
      <Link to="/favorites">
        <p>Favorites</p>
      </Link>
    </div>
  );
}
