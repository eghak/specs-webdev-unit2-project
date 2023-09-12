import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  ///// USE STATE /////
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  ///// USE EFFECT to fetch movie from external API /////
  function getData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results)
        setMovieList(res.data.results)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [page]);

  ///////////////////////////////////////////////////////

  // ADD MOVIE function //
  function addMovie(movie){
    setWatchList([...watchList, movie])
  }

  // REMOVE MOVIE function //
  function removeMovie(movie){
    let newState = watchList.filter((mov) => {
      return mov !== movie
    })
    setWatchList(newState)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchList={watchList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
