import React, { useState } from "react";

export default function SearchBar({ setQuery }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setQuery(input);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-box">
      <input
        type="text"
        placeholder="Search movies or TV shows..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
