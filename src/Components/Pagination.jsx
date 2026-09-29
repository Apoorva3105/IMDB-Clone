import React from 'react'

function Pagination({ pageNo, incrementPage, decrementPage, incrementPageByFive, decrementPageByFive }) {
  return (
    <div className="bg-gray-200 py-4 flex justify-center mt-4">
        <div onClick={decrementPageByFive} className="mr-6 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 text-xl">
            <i class="fa-solid fa-angles-left"></i>
        </div>
        <div onClick={decrementPage} className="mr-4 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 text-xl">
            <i class="fa-regular fa-circle-left"></i>
        </div>
        <div className="cursor-pointer hover:text-2xl transition duration-300 ease-in-out transform hover:scale-110 text-xl">
            {pageNo}
        </div>
        <div onClick={incrementPage} className="ml-4 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 text-xl">
            <i class="fa-regular fa-circle-right"></i>
        </div>
        <div onClick={incrementPageByFive} className="ml-6 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 text-xl">
            <i class="fa-solid fa-angles-right"></i>
        </div>
    </div>
  )
}

export default Pagination