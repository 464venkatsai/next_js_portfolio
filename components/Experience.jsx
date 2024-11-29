import React from 'react'
import { workExperience } from './data'
import { Button } from './ui/MovingBorder'

function Experience() {
  return (
    <div className='w-full h-max relative'>
      <img src="/grid.svg" alt="grid" className='w-full h-full absolute opacity-[.5] right-0 object-fill' />
        <h1 className=' my-10 text-center font-inter font-bold text-4xl'>My <span className='text-purple'>Technical Skills</span></h1>
        <div className='grid place-items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 p-10 gap-y-10'>
            {workExperience.map((card)=>{
                return <div key={card.id}>
                  <Button borderRadius='1.7rem' duration={Math.floor(Math.random()*1000)+3000} className="p-10 w-[35vw]">
                    <div>
                      <img src={card.thumbnail} alt={card.title} />
                      <div>
                        <h1 className='text-start my-3 text-2xl font-semibold'>{card.title}</h1>
                        <p className='text-start text-neutral-300'>{card.desc}</p>
                      </div>
                    </div>
                  </Button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Experience
