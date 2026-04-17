import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../api"; // import API function

export default function MovieDetails({ movie, goBack }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getMovieDetails(movie.imdbID).then((data) => {
      setDetails(data);
    });
  }, [movie]);

  if (!details) return <p>Loading...</p>;

 return (
  <div className="details">

    {/* TOP BAR */}
    <div className="details-header">
      <button onClick={goBack}>← Back</button>
    </div>

    <img src={details.Poster} alt={details.Title} />

    <h2>{details.Title}</h2>
    <p><strong>Year:</strong> {details.Year}</p>
    <p><strong>Genre:</strong> {details.Genre}</p>
    <p><strong>Plot:</strong> {details.Plot}</p>
    <p><strong>IMDB Rating:</strong> ✮ {details.imdbRating}</p>
  </div>
);

}
