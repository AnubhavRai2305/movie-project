import React from "react";

export default function MovieCard({ movie, setSelectedMovie }) {
  return (
    <div className="card" onClick={() => setSelectedMovie(movie)}>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x400"
        }
        alt={movie.Title}
      />

      <div className="card-content">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}
