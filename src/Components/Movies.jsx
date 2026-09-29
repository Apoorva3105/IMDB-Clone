import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from 'axios';
import Pagination from "./Pagination";

function Movies(props) {

  const [movies, setMovies] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);

  const incrementPage = () => {
    setPageNo(pageNo + 1);
  }

  const decrementPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const incrementPageByFive = () => {
    setPageNo(pageNo + 5);
  }

  const decrementPageByFive = () => {
    if (pageNo > 5) {
      setPageNo(pageNo - 5);
    }
  };



  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b289ebd80d87a287018a1c9d16369d98&language=en-US&page=${pageNo}`).then(function (response) {
      setMovies(response.data.results);
    });
  }, [pageNo]);

  return (
    <div className="p-4">
      <div className="text-2xl font-bold text-black m-3 items-center text-center">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center m-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} handleAddToWatchlist={props.handleAddToWatchlist} handleRemoveFromWatchlist={props.handleRemoveFromWatchlist} watchlist={props.watchlist} />
        ))}
      </div>
      <Pagination pageNo={pageNo} incrementPage={incrementPage} decrementPage={decrementPage} incrementPageByFive={incrementPageByFive} decrementPageByFive={decrementPageByFive} />
    </div>
  );
}

export default Movies;
