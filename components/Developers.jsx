import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from './data'

function Developers() {
  return (
    <div className='py-10 mb-5 flex flex-col items-center justify-center' id='testimonials'>
      <div className='my-10'>
        <h1 className='text-4xl font-inter font-bold'>
          My <span className='text-purple'> Co-Developers</span> and <span className='text-purple'>Collaborators</span>
        </h1>
      </div>
      <div className="">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

export default Developers
