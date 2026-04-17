import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { searchMovies } from "./api"; // 👈 import API function
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    searchMovies(query).then((data) => {
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    });
  }, [query]);

  return (
    <div className="app">
      <h1>Movie</h1>

      <SearchBar setQuery={setQuery} />

      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          goBack={() => setSelectedMovie(null)}
        />
      ) : (
        <MovieList
          movies={movies}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </div>
  );
}
