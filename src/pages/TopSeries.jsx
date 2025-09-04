import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

import "../styles/pages/topSeries.sass";

export default function TopSeries() {
  const [topSeries, setTopSeries] = useState([]);

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

  useEffect(() => {
    async function fetchTrendingSeries() {
      try {
        const response = await axios.request(options);
        const data = response.data;
        setTopSeries(data.results);
        //setLoading(true);
      } catch (err) {
        console.log("ERRO: ", err);
      }
    }

    fetchTrendingSeries();
  }, []);

  console.log("TOP SERIES: ", topSeries);

  return (
    <div className="topseries-container">
      <h1>Top 20 Series Today</h1>
      <p>Select a series to see more, or add to your favorits!</p>
      {topSeries && topSeries.length > 0 ? (
        <Card content={topSeries} removeBtn={false} status={"series"} />
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
