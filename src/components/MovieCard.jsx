import React from 'react'

function MovieCard({movie, watchList, addMovie, removeMovie}) {
  // the onClick function to ADD MOVIE
  function runAddMovie(){
    addMovie(movie)
  }

  // the onClick function to REMOVE MOVIE
  function runRemoveMovie(){
    removeMovie(movie)
  }

  // to FILTER movie
  let inWatchList = watchList.filter((mov) => {
    return mov.id === movie.id
  })

  // conditional BUTTON: to get the REMOVE BUTTON once a movie is moved to the watchlist area.
  let button = inWatchList.length === 0 ? <button onClick={runAddMovie} >Add to List</button> : <button onClick={runRemoveMovie} >Remove</button>

  return (
    <div className='movie-card' >
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
            <h3>{movie.original_title}</h3>
            {/* This is a button before I made the conditional button that will show a REMOVE BUTTON when a movie is moved to the watchlist:
            <button onClick={runAddMovie} >Add to List</button> */}
            {/* OR, Inline onClick function. Invoke addMovie in a callback:
            <button onClick={() => addMovie(movie)} >Add to List</button> */}
            {button}
        </div>
    </div>
  )
}

export default MovieCard