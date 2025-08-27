import React from "react";
import "../styles/components/searchbox.sass";

export default function SearchBox({ search, setSearch, handleSubmit }) {
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          //value={value}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
