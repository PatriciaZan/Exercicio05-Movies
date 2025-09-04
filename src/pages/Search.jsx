import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

import "../styles/pages/search.sass";

//import { FavoriteContext } from "../context/GlobalContext";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  //console.log("SEARCH INPUT: ", searchInput);

  //const FavContext = useContext(FavoriteContext);
  //console.log("FAVCONTEXT: ", FavContext);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/multi",
    params: {
      query: `${searchInput}`,
      include_adult: "false",
      language: "en-US",
      page: `${pageNumber}`,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzRjNzI3MmVlNjRmYjExZDI3MGUxNDI3ZDQwYzYzNyIsIm5iZiI6MTc1NTY0MDg0OS41NDIsInN1YiI6IjY4YTRmNDExYmMyZWE1YjA2ZmQ1NDk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84Jtk5jvHL9iWtcrGlk0KMKpX7Vm-snWJe6BTCNLX3E",
    },
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setSearchMovies(data.results);
      //console.log("MOVIES: ", searchMovies);
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  // handles next result page
  useEffect(() => {
    fetchData(searchMovies);
  }, [undefined]);

  useEffect(() => {
    //console.log("PAGE CHANGED TO: ", pageNumber);
    fetchData(searchMovies);
  }, [pageNumber]);

  console.log("SEARCH MOVIES ", searchMovies);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="search-container">
      <div className="serch-input">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Movie or Series name..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>

      <button className="search-btnsPages" onClick={handlePrevPage}>
        ◀
      </button>
      <button className="search-btnsPages" onClick={handleNextPage}>
        ▶
      </button>
      <div>
        <h1>Results</h1>
        {searchMovies && searchMovies.length > 0 ? (
          <Card content={searchMovies} removeBtn={false} />
        ) : (
          <p>Search a movie or series name to display here...</p>
        )}
      </div>
    </div>
  );
}
