import React, { useEffect } from "react";
import { useState } from "react";
import genreid from "../Utility/genre";

function Watchlist(props) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleFilter(genre) {
    setCurrGenre(genre);
  }

  function sortIncreasing() {
    let sortedInc = props.watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    props.setWatchlist([...sortedInc]);
  }

  function sortIncreasingP() {
    let sortedIncP = props.watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });

    props.setWatchlist([...sortedIncP]);
  }

  function sortDecreasing() {
    let sortedDec = props.watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    props.setWatchlist([...sortedDec]);
  }

  function sortDecreasingP() {
    let sortedDecP = props.watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });

    props.setWatchlist([...sortedDecP]);
  }

  useEffect(() => {
    let temp = props.watchlist.map((movieObj) => {
      return genreid[movieObj.genre_ids[0]];
    });

    temp = new Set(temp)

    setGenreList(["All Genres", ...temp]);
  }, [props.watchlist]);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-4 m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "bg-gray-800 text-white flex justify-center px-4 py-2 rounded-lg hover:scale-105 transition duration-300"
                  : "bg-gray-200 text-gray-500 flex justify-center px-4 py-2 rounded-lg"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className=" p-4 flex justify-center items-center flex-col gap-4 ">
        <input
          onChange={handleSearch}
          value={search}
          className="bg-gray-200 h-[3rem] w-[18rem] placeholder:text-gray-500 px-4"
          type="text"
          placeholder="Search your watchlist"
        />
      </div>

      <div className="max-w-[95%] mx-auto my-6">
        <table className="w-full border-collapse text-center">
          <thead className=" text-white">
            <tr className="bg-gray-800 p-4 m-4 rounded-lg overflow-hidden">
              <th className="py-4 rounded-l-xl">Title</th>
              <th className="py-4">
                <div className="flex justify-center items-center gap-2">
                  <div onClick={sortIncreasing} className="p-1 cursor-pointer">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div>Ratings</div>
                  <div onClick={sortDecreasing} className="p-1 cursor-pointer">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>

              <th className="py-4">
                <div className="flex justify-center items-center gap-2">
                  <div onClick={sortIncreasingP} className="p-1 cursor-pointer">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div>Popularity</div>
                  <div onClick={sortDecreasingP} className="p-1 cursor-pointer">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th className="py-4">Genre</th>
              <th className="py-4 rounded-r-xl">Action</th>
            </tr>
          </thead>

          <tbody>
            {props.watchlist.filter((movieObj)=>{
              if (currGenre == "All Genres"){
                return true;
              }
              else{
                return genreid[movieObj.genre_ids[0]]==currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 border-gray-300 hover:bg-gray-300">
                    <td className="flex items-center px-6 py-4 gap-4 ">
                      <img
                        className="w-[10rem] h-[6rem] mt-2"
                        src={`https://image.tmdb.org/t/p/w500${movieObj.backdrop_path || movieObj.poster_path}`}
                        alt={movieObj.title}
                      />
                      <div className="flex flex-col items-start gap-2 text-gray-800 mx-5">
                        {movieObj.title}
                      </div>
                    </td>

                    <td className="py-4">{movieObj.vote_average}</td>
                    <td className="py-4">{movieObj.popularity}</td>
                    <td className="py-4">{genreid[movieObj.genre_ids[0]]}</td>

                    <td className="py-4">
                      <button onClick={()=>props.handleRemoveFromWatchlist(movieObj)} className="text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
