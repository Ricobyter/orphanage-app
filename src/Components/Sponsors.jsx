import React from 'react'
import img1 from './Assets/facebook.png'
import img2 from './Assets/x.png'
import img3 from './Assets/youtube.png'
import img4 from './Assets/google.png'

const Sponsors = () => {
  return (
    <div className='p-7 mt-10'>
        <h1 className='text-center text-5xl font-semibold mb-7'>Our Sponsors who make us great</h1>
        <div className='flex flex-col lg:flex-row w-full justify-between'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img4} alt="" />

        </div>
      
    </div>
  )
}

export default Sponsors
