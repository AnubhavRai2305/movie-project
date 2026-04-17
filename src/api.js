const API_KEY = "70dbcea0";

export const searchMovies = async (query) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();
  return data;
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  const data = await res.json();
  return data;
};
