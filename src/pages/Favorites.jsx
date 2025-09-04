import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import "../styles/pages/favorites.sass";

export default function Favorites() {
  const [favoritesLocal, setFavoritesLocal] = useState([]);

  const [refresh, setRefresh] = useState(true);

  console.log("FAV LOCAL: ", favoritesLocal);
  const favoriteLength = favoritesLocal.length;
  console.log(favoriteLength);

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem("Favorite-movies")
    );
    setFavoritesLocal(localStorageData);
  }, [refresh]);

  return (
    <div className="favories-container">
      <h1>Your Favorites</h1>
      <button onClick={() => setRefresh(!refresh)}>Update Favorites</button>
      {favoritesLocal && favoritesLocal.length > 0 ? (
        <Card content={favoritesLocal} addBtn={false} status={"favorites"} />
      ) : (
        <p>Add movies and series</p>
      )}
    </div>
  );
}

//const localStorageData = JSON.parse(localStorage.getItem("Favorite-movies"));
//const [favoritesLocal, setFavoritesLocal] = useState(localStorageData);
//window.addEventListener("storage", console.log("Change to LOCAL"));
