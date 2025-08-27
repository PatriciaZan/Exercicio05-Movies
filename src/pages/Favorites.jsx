import React, { useEffect, useState } from "react";
//import MoviesList from "../components/MoviesList";

export default function Favorites() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  // const localStorageSave = (items) => {
  //   localStorage.setItem("movie-app-favs", JSON.stringify(items));
  // };

  useEffect(() => {
    const movieFavsLocal = JSON.parse(localStorage.getItem("movie-app-favs"));
    setFavourites(movieFavsLocal);
    setLoading(true);
  }, []);

  // const removeFavourites = (movie) => {
  //   const newFavouriteArray = favourites.filter(
  //     (favourite) => favourite.id !== movie.id
  //   );
  //   setFavourites(newFavouriteArray);
  //   localStorageSave(newFavouriteArray);
  // };

  console.log("FAVOURITES: ", favourites);
  console.log("LOADING: ", loading);

  return (
    <>
      {loading ? (
        <p>...Loading</p>
      ) : favourites && favourites.length > 1 ? (
        <div>
          {favourites.map((item) => (
            // must add key
            <p>{item.original_title}</p>
          ))}
        </div>
      ) : (
        <p>Error fetching data.... try again :/</p>
      )}
    </>
  );
}
