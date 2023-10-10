import React from 'react'
import imgs from './Assets/aboutus_img.jpg'

const About_Us = () => {
  return (
    <div className='mt-10 p-7'>
        
     <div className='flex gap-5 '>
        <div className='w-3/5 text-xl'>
            <h1 className='text-3xl font-semibold mb-5 text-center'>Love knows no bounds.</h1>
           
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eaque quasi alias aliquam recusandae repellendus suscipit ut, odit impedit maiores corporis beatae, iste deleniti provident aspernatur dignissimos vero nostrum accusantium laudantium inventore quam. Quaerat repudiandae repellat quod ex illo qui ipsum reprehenderit adipisci.</p>
                <p className='mt-2'>Minima sequi doloribus nemo itaque, qui exercitationem hic unde sint corrupti cupiditate architecto iure distinctio animi error ut aliquam asperiores perferendis odio excepturi aperiam, esse eaque.</p>
                <p className='mt-2'> Tempora quis error impedit similique, ad ea eveniet est facilis iusto assumenda nisi sunt aliquam officiis expedita provident voluptates necessitatibus quae deserunt reiciendis incidunt quia aut eum fugiat illo. Libero, quasi.</p>
        </div>
        <div className='w-2/5'>
            <img src={imgs} alt="Image" className='w-full h-full object-cover' />
        </div>
        
        </div> 
     
    </div>
  )
}

export default About_Us
