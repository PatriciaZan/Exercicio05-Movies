import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/pages/movies.sass";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";

export default function Series() {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzRjNzI3MmVlNjRmYjExZDI3MGUxNDI3ZDQwYzYzNyIsIm5iZiI6MTc1NTY0MDg0OS41NDIsInN1YiI6IjY4YTRmNDExYmMyZWE1YjA2ZmQ1NDk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84Jtk5jvHL9iWtcrGlk0KMKpX7Vm-snWJe6BTCNLX3E",
    },
  };

  async function fetchTrendingSeries() {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setTrendingSeries(data.results);
      setLoading(true);
      return data.results;
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  useEffect(() => {
    async function fetchTrendingSeries() {
      try {
        const response = await axios.request(options);
        const data = response.data;
        setTrendingSeries(data.results);
        //setLoading(true);
      } catch (err) {
        console.log("ERRO: ", err);
      }
    }

    fetchTrendingSeries();
  }, []);

  console.log("TRENDING SERIES: ", trendingSeries);

  return (
    <div>
      <>
        {loading ? (
          <p>...Loading</p>
        ) : trendingSeries && trendingSeries.length > 1 ? (
          <div>
            <Banner
              title={trendingSeries[0].original_name}
              poster={trendingSeries[0].backdrop_path}
              cardImg={trendingSeries[0].poster_path}
              about={trendingSeries[0].overview}
            />
            <div className="movies-container">
              {trendingSeries.map((item) => (
                // must add key
                <MovieCard
                  title={item.original_name}
                  poster={item.poster_path}
                  about={item.overview}
                />
                //<p>{item.original_name}</p>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    </div>
  );
}
