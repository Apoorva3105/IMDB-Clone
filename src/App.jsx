import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import Watchlist from "./Components/Watchlist";
import Banner from "./Components/Banner";

import { BrowserRouter, Routes, Route } from "react-router";
import Pagination from "./Components/Pagination";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist);
    console.log("Added to watchlist:", newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    localStorage.setItem('moviesApp' , JSON.stringify(filteredWatchlist))

    setWatchlist(filteredWatchlist);
    console.log("Removed from watchlist:", filteredWatchlist);
  };

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <>
                <Watchlist
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
