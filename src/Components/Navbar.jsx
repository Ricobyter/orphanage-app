import React from 'react'

const header = () => {
  return (
    <div className=" bg-black font-bold  justify-between m-0 p-0 flex">
    <p className='text-2xl text-white text-left px-3 py-2'>CareConnect</p>
    <button class="bg-black hover:bg-white hover:text-black text-white p-1 mx-2 rounded-lg border border-black my-1">
      Home
    </button>
    <button class="bg-black hover:bg-white hover:text-black text-white p-1 mx-2 rounded-lg border border-black my-1">
      About Us
    </button>
    <button class="bg-black hover:bg-white hover:text-black text-white p-1 mx-2 rounded-lg border border-black my-1">
      Orphanages
    </button>
    <button class="bg-black hover:bg-white p-1 hover:text-black text-white mx-3 rounded-lg border border-black my-1">
      Login
    </button>
   


  </div>
  )
}

export default header

