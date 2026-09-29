import React from 'react'

function Banner() {
  return (
    <div className="w-full h-[20vh] md:h-[70vh] bg-cover bg-[center_top_30%]" style = {{ backgroundImage: 'url(https://m.media-amazon.com/images/S/pv-target-images/19a616abe78054fde38fa715197e4786611902bb8e8a6a6d40a157545d7e1d53.jpg)'}}>
        <div className='w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-4 text-white text-2xl md:text-5xl font-bold'>
            American Pie: The Beta House
        </div>
    </div>
  )
}

export default Banner