import React from "react";

// The main page banner
export default function Banner({ title, poster }) {
  return (
    <div>
      <span>Top movie</span>
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={`Movie ${title} poster`}
      />

      <h1>{title}</h1>
    </div>
  );
}
