import React from 'react'
import MovieCard from "./MovieCard"

function Watchlist({watchList, removeMovie}) {
    let movieDisplay = watchList.map((movie) => {
        return <MovieCard movie={movie} watchList={watchList} removeMovie={removeMovie} />
    })
  return (
    <div className='watchlist' >
        <h1>My Watchlist</h1>
        <div className="movie-container">
            {movieDisplay}
        </div>
    </div>
  )
}

export default Watchlist