import React from 'react'
import success from '../assets/animation/success.json'
import Lottie from 'lottie-react'
const Success = () => {
  return (
    <div className=' justify-center items-center flex h-[80vh] '>
        <Lottie animationData={success} loop={false} className='h-100 w-100'/>
    </div>
  )
}

export default Success