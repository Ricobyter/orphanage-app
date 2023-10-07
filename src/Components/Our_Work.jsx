import React from 'react'
import img1 from './Assets/6.jpg'
import img2 from './Assets/2.jpg'
import img3 from './Assets/3.jpg'
import img4 from './Assets/5.jpg'

const Our_Work = () => {
  return (
    <div className='flex min-h-screen items-center justify-center '>
        
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4'>
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                <div className='h-96 w-72'>
                    <img src={img1} alt="" className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'/>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                    <h1 className='text-3xl font-bold text-white '>Safes</h1>
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur voluptates veniam.</p>
                    <button className='rounded-full bg-black py-3 px-3.5 text-sm capitalize text-white shadow shadow-black'>See More</button>
                
                </div>
            </div>
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                <div className='h-96 w-72'>
                    <img src={img1} alt="" className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'/>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                    <h1 className='text-3xl font-bold text-white '>Safes</h1>
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur voluptates veniam.</p>
                    <button className='rounded-full bg-black py-3 px-3.5 text-sm capitalize text-white shadow shadow-black'>See More</button>
                
                </div>
            </div>
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                <div className='h-96 w-72'>
                    <img src={img3} alt="" className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'/>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                    <h1 className='text-3xl font-bold text-white '>Safes</h1>
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur voluptates veniam.</p>
                    <button className='rounded-full bg-black py-3 px-3.5 text-sm capitalize text-white shadow shadow-black'>See More</button>
                
                </div>
            </div>
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                <div className='h-96 w-72'>
                    <img src={img2} alt="" className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'/>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                    <h1 className='text-3xl font-bold text-white '>Safes</h1>
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur voluptates veniam.</p>
                    <button className='rounded-full bg-black py-3 px-3.5 text-sm capitalize text-white shadow shadow-black'>See More</button>
                
                </div>
            </div>

        </div>
        <div className='fixed bottom-16 '>
            <p className='text-2xl font-semibold text-white'>
                This is the description.
            </p>
        </div>
      
    </div>
  )
}

export default Our_Work
