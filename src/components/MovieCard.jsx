import React from "react";
import "../styles/components/movieCard.sass";
// Lidando nesse aqui!
export default function MovieCard({ title, poster, about }) {
  return (
    <div className="movieCard-container">
      <img
        className="movieCard-img"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt=""
      />
      <h3>{title}</h3>
    </div>
  );
}
