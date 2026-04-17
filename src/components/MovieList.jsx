import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, setSelectedMovie }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          setSelectedMovie={setSelectedMovie}
        />
      ))}
    </div>
  );
}
