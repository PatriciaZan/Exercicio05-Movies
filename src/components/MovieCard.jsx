import React from "react";
// Lidando nesse aqui!
export default function MovieCard({ title, poster, overview }) {
  return (
    <div>
      <h3>{title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt=""
        width="100px"
      />
    </div>
  );
}
