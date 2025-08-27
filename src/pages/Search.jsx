import { useEffect, useState } from "react";
//import "./App.css";
import "../styles/pages/search.sass";
import axios from "axios";

import SearchBox from "../components/SearchBox";
import MoviesList from "../components/MoviesList";

// For the diferent options of favorites
import AddFavourites from "../components/AddFavourites";
import RemoveFavourites from "../components/RemoveFavourites";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);

  // Handling the API CALL
  // Setting the default axios options
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: `${search}`,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzRjNzI3MmVlNjRmYjExZDI3MGUxNDI3ZDQwYzYzNyIsIm5iZiI6MTc1NTY0MDg0OS41NDIsInN1YiI6IjY4YTRmNDExYmMyZWE1YjA2ZmQ1NDk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84Jtk5jvHL9iWtcrGlk0KMKpX7Vm-snWJe6BTCNLX3E",
    },
  };

  // Making the API CALL
  async function fetchData() {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setMovies(data.results); // must be .results or will pass as an object
      //setLoading(true);
      console.log("MOVIES: ", movies);
      //console.log("MOVIE RESULTS: ", movies.results);
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  // Making a Func to handle a click event, so the search is only
  // done after the user is done typing.
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("HANDLESUBMIT AQUI");
    // call for the app to be executed
    fetchData();
  };

  // useEffect will run once on the init of the page, avoiding the undefine array valuess
  useEffect(() => {
    fetchData(search);
  }, [undefined]);

  // useEffect for the same 'problem' in the favorites
  // aquiii
  useEffect(() => {
    addFavourite(movies);
  }, [undefined]);

  // useEffect for retriving the localStorage favorited movies
  useEffect(() => {
    const movieFavsLocal = JSON.parse(localStorage.getItem("movie-app-favs"));

    setFavourites(movieFavsLocal);
  }, []);

  const localStorageSave = (items) => {
    localStorage.setItem("movie-app-favs", JSON.stringify(items));
  };

  // Manages the Favorites option and storing in localStorage
  const addFavourite = (movie) => {
    const newFavouriteArray = [...favourites, movie];
    setFavourites(newFavouriteArray);
    console.log("FAVORITE: ", favourites);
    localStorageSave(newFavouriteArray);
  };

  const removeFavourites = (movie) => {
    const newFavouriteArray = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteArray);
    localStorageSave(newFavouriteArray);
  };

  return (
    <>
      <div className="searchbox-container">
        <SearchBox
          search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
        />
      </div>

      <div>
        {movies && movies.length > 0 ? (
          <MoviesList
            movies={movies}
            handleFavourite={addFavourite}
            favouriteBtn={AddFavourites}
          />
        ) : (
          <p>Search movies</p>
        )}
      </div>

      <div>
        <h2>Favourites</h2>
        {favourites && favourites.length > 0 ? (
          <MoviesList
            movies={favourites}
            handleFavourite={removeFavourites}
            favouriteBtn={RemoveFavourites}
          />
        ) : (
          <p>Add movies</p>
        )}
      </div>
    </>
  );
}

export default App;
