import React from 'react'
import entryImg from './Assets/entry_img.jpg'

const Entry_image = () => {
  return (
    <div className='w-screen h-screen bg-center bg-cover bg-no-repeat justify-center flex flex-col opacity-94 '
    style={{
        backgroundImage: `url(${entryImg})`}}>
          <h1 className='mx-auto text-white text-5xl opacity-100 font-extrabold'>Don't let the Children be alone</h1>
          <button className='bg-black text-white p-4 mt-20 hover:bg-white hover:text-black '>Donate Now</button>    
    </div>
  )
}

export default Entry_image
