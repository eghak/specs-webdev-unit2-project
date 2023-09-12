import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({
  movieList,
  page,
  setPage,
  watchList,
  addMovie,
  removeMovie,
}) {
  let movieDisplay = movieList.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        watchList={watchList}
        removeMovie={removeMovie}
      />
    );
  });

  function incrementPage() {
    setPage(page + 1);
  }

  function decrementPage() {
    if (page > 1) {
      setPage(page - 1);
    } else {
      alert("You are on page 1");
    }
  }

  return (
    <div className="page">
      <h1>Egha's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={decrementPage}>Previous</button>
        <button onClick={incrementPage}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
