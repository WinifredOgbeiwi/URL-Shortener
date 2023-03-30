import React from 'react'
import Button from './subComponents/Button'
import MainImg from './images/illustration-working.svg'
function Hero() {
  return (
    <section className='flex flex-col-reverse md:flex-row pr-0 mb-20'>
      <div className='basis-1/2 mt-10 flex flex-col items-center justify-center md:items-start '>
        <h1 className='text-4xl lg:text-6xl font-extrabold lg:leading-tight text-center lg:text-start '>More than just<br/> shorter links</h1>
        <p className=' text-cust-gray-violet mb-5 text-center  text-sm lg:text-xl lg:text-start'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <Button text=' Get Started' />
      </div>
      <div className='basis-1/2 '>
        <img src={MainImg} alt="" className='w-full'/>
      </div>
    </section>
  )
}











export default Hero
