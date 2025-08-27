import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/movies">
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
  );
}
