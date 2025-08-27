import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Series from "./pages/Series.jsx";
import Favorites from "./pages/Favorites.jsx";
import Search from "./pages/Search.jsx";
import Movies from "./pages/Movies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
