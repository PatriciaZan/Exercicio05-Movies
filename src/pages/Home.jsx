import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

import Movieslist from "../components/MoviesList";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

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

  async function fetchTrendingMovies() {
    try {
      const response = await axios.request(options);
      const data = response.data;

      //setTrendingMovies(data.results);
      //console.log("TRENDING MOVIES: ", trendingMovies);
      return data.results;
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  useEffect(() => {
    async function getData() {
      setTrendingMovies(await fetchTrendingMovies());
    }
    getData();
  }, []);

  console.log(trendingMovies);

  return (
    <div>
      <p>Cinema</p>
      <NavBar />
      {/* <Movieslist movies={trendingMovies} /> */}
      <h1>{trendingMovies[0].original_title}</h1>
    </div>
  );
}
