import React, { useState } from 'react'
import { motion } from 'framer-motion'
import img1 from './Assets/1.jpeg'
import img2 from './Assets/2.jpg'
import img3 from './Assets/3.jpg'
import img4 from './Assets/4.jpg'
import img5 from './Assets/5.jpg'

const Our_Work = () => {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: '400px'
        },
        collapsed: {
            width: '200px'
        }
    }

    const cardImages = [img1, img2, img3, img4, img5]

    const cardDescription = [
        'Yhis is a description, We can write whatever we like',
        'Yhis is a description, We can write whatever we like',
        'Yhis is a description, We can write whatever we like',
        'Yhis is a description, We can write whatever we like',
        'Yhis is a description, We can write whatever we like'
    ]
    return (
        <section className='py-16 pb-[300px]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-8'>
                <h1 className='text-4xl font-extrabold text-black'>
                    Our Achievements
                </h1>
                <p className='mt-4 text-xl '>
                    Some of the deeds we have accomplished.
                </p>

            </div>

        </section>
    )
}

export default Our_Work
