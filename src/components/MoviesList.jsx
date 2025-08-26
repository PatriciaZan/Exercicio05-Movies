import React, { useState } from "react";
import MovieInfo from "./MovieInfo";

export default function MoviesList({ movies, handleFavourite, favouriteBtn }) {
  // Components must start with upperCase,
  const FavouriteBtn = favouriteBtn;

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const lastMovie = currentPage * moviesPerPage;
  const firstMovie = lastMovie - moviesPerPage;
  const displayMovies = movies.slice(firstMovie, lastMovie);

  // Next page +
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  // Prev Page -
  const prevePage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Manages the Info
  const handleInformation = (movie) => {
    console.log(movie);
  };

  return (
    <div className="container-movies" style={{ display: "flex" }}>
      {displayMovies.map((movie, i) => (
        <div key={i}>
          <img
            style={{ width: "200px" }}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <div onClick={() => handleFavourite(movie)}>
            <FavouriteBtn />
          </div>
          {/* Handle information Need to be in separete page */}
          <div onClick={() => handleInformation(movie)}>
            <MovieInfo />
          </div>
        </div>
      ))}

      <button onClick={prevePage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

// ORIGINAL BK
// import React, { useState } from "react";
// export default function MoviesList({ movies, handleFavourite, favouriteBtn }) {
//   // Components must start with upperCase,
//   const FavouriteBtn = favouriteBtn;
//   return (
//     <div className="aqui" style={{ display: "flex" }}>
//       {movies.map((movie, i) => (
//         <div key={i}>
//           <img
//             style={{ width: "200px" }}
//             src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//             alt={movie.title}
//           />
//           <h3>{movie.title}</h3>
//           <div onClick={() => handleFavourite(movie)}>
//             <FavouriteBtn />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
