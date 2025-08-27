import React from "react";
import "../styles/components/banner.sass";

// The main page banner
export default function Banner({ title, poster, cardImg, about }) {
  return (
    <div className="banner-container">
      <img
        className="banner-img"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={`Movie ${title} poster`}
      />

      <div className="banner-Subcontent">
        <div className="banner-Subcomponent-left">
          <span className="banner-span">Trending today</span>
          <h1 className="banner-title">{title}</h1>
          <p className="banner-about">{about}</p>
        </div>

        <img
          className="banner-cardImg"
          src={`https://image.tmdb.org/t/p/original${cardImg}`}
          alt=""
        />
      </div>
    </div>
  );
}
