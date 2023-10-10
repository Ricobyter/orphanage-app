import React, { useState } from 'react'
import {motion} from 'framer-motion'
import imgs1 from './Assets/6.jpg'
import imgs2 from './Assets/2.jpg'
import imgs3 from './Assets/3.jpg'
import imgs4 from './Assets/4.jpg'
import imgs5 from './Assets/5.jpg'

 

const Image_Slider = () => {

  const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4])

  const handleNext = ()=>{
    setPositionIndexes((prevIndexes)=>{
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex+1)%5)
      return updatedIndexes
    }
    )
  }

  const images = [
    imgs1,
    imgs2,
    imgs3,
    imgs4,
    imgs5
  ]

  const positions = [
    'center',
    'left1',
    'left',
    'right',
    'right1'
  ]

  const imageVariants = {
    center: {x: '0%', scale: 1, zIndex: 5},
    left1: {x: '-50%', scale: 0.7, zIndex: 2},
    left: {x: '-90%', scale: 0.5, zIndex: 1},
    right: {x: '90%', scale: 0.5, zIndex: 1},
    right1: {x: '50%', scale: 0.7, zIndex: 2},
  }
  
  return (
      
    <div className='flex items-center flex-col justify-center h-screen'>

      <h1 className=' text-4xl font-bold mb-5'>Our Gallery</h1>

      <br />
      {images.map((image, index)=>(
        <motion.img
        key = {index}
        src = {image}
        alt = {image}
        className="rounded-[12px]"
        initial = "center"
        animate = {positions[positionIndexes[index]]}
        variants={imageVariants}
        transition={{duration: 0.5}}
        style={{width: '40%', position: 'absolute'}}
        />
      ))}

      <button className='text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4' onClick={handleNext}>Next </button>
    </div>
  )
}

export default Image_Slider


