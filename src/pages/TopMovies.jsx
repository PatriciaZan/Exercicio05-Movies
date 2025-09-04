import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

import "../styles/pages/topMovies.sass";

export default function TopMovies() {
  const [topMovies, setTopMovies] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzRjNzI3MmVlNjRmYjExZDI3MGUxNDI3ZDQwYzYzNyIsIm5iZiI6MTc1NTY0MDg0OS41NDIsInN1YiI6IjY4YTRmNDExYmMyZWE1YjA2ZmQ1NDk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84Jtk5jvHL9iWtcrGlk0KMKpX7Vm-snWJe6BTCNLX3E",
    },
  };

  // Makes a request when first laoding the page
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await axios.request(options);
        const data = response.data;
        setTopMovies(data.results);
      } catch (err) {
        console.log("ERRO: ", err);
      }
    }

    fetchTrendingMovies();
  }, []);

  console.log("TOP MOVIES: ", topMovies);

  return (
    <div className="topmovies-container">
      <h1>Top 20 Movies Today</h1>
      <p>Select a movie to see more, or add to your favorits!</p>
      {topMovies && topMovies.length > 0 ? (
        <Card content={topMovies} removeBtn={false} status={"movies"} />
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
