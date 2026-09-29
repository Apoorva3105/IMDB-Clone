import React from 'react'

function MovieCard(props) {

  function doesContain(movieObj) {
    for (let i = 0; i < props.watchlist.length; i++) {
      if (props.watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className='relative h-[40vh] w-[24vh] bg-cover bg-center rounded-xl shadow-lg hover:scale-105 transition duration-300' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.movie.poster_path})`}}>
      {doesContain(props.movie) ? (
        <div onClick={()=>{props.handleRemoveFromWatchlist(props.movie)}} className='absolute top-2 right-2 bg-gray-900/60 text-white px-2 py-1 rounded-lg'>
          &#10060;
        </div>
      ) : (
        <div onClick={()=>{props.handleAddToWatchlist(props.movie)}} className='absolute top-2 right-2 bg-gray-900/60 text-white px-2 py-1 rounded-lg'>
          &#128571;
        </div>
      )}
      <div className='h-full w-full rounded-xl flex flex-col justify-end p-4'>
        <div className='text-white text-lg font-bold'>{props.movie.title}</div>
      </div>
    </div>
  )
}

export default MovieCard