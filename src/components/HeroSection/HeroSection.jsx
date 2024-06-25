import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <div className='flex justify-evenly items-center text bg-green-100'>
             <div className='flex flex-col gap-2 lg:gap-5 text-3xl md:text-5xl lg:text-6xl'>
                <p>Your Online Shop</p>
                <p>Get your fashion</p>
             </div>
             <div className=' w-5/12'>
                <img src="./images/3.png"  alt="" />
             </div>
        </div>
    </div>
  )
}

export default HeroSection