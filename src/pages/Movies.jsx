import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
//import MoviesList from "../components/MoviesList";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // PQ TEM N FUNCIONA?? ;-;
  async function fetchTrendingMovies() {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setTrendingMovies(data.results);
      setLoading(true);
      //console.log("TRENDING MOVIES: ", trendingMovies);
      return data.results;
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await axios.request(options);
        const data = response.data;
        setTrendingMovies(data.results);
        //setLoading(true);
      } catch (err) {
        console.log("ERRO: ", err);
      }
    }

    fetchTrendingMovies();
  }, []);

  console.log("TRENDING MOVIES: ", trendingMovies);

  return (
    <>
      {loading ? (
        <p>...Loading</p>
      ) : trendingMovies && trendingMovies.length > 1 ? (
        <div>
          <Banner
            title={trendingMovies[0].original_title}
            poster={trendingMovies[0].backdrop_path}
          />
          {/* {trendingMovies.map((item) => (
            // must add key
            <p>{item.original_title}</p>
          ))} */}
          {trendingMovies.map((item) => (
            <MovieCard
              title={item.original_title}
              poster={item.poster_path}
              about={item.overview}
            />
          ))}
        </div>
      ) : (
        <p>Error fetching data.... try again :/</p>
      )}
    </>
  );
}

//   async function fetchTrendingMovies() {
//     try {
//       const response = await axios.request(options);
//       const data = response.data;
//       setTrendingMovies(data.results);
//       setLoading(true);
//       //console.log("TRENDING MOVIES: ", trendingMovies);
//       return data.results;
//     } catch (err) {
//       console.log("ERRO: ", err);
//     }
//   }

//   useEffect(() => {
//     async function getData() {
//       setTrendingMovies(await fetchTrendingMovies());
//     }
//     getData();
//   }, []);
