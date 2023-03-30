import React from 'react'
import BackgroundImg from './images/bg-boost-desktop.svg'
import Button from './subComponents/Button'
function GetStarted() {
  return (
    <>
      <section className=' bg-[#716588] flex flex-col items-center py-12 px-10'
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: 'cover'
        }}>
          <h2 className='text-white font-semibold text-xl md:text-3xl mb-3 md:mb-6'> Boost your links today</h2>
         <Button text='Get Started'/>
      </section>
    </>
  )
}

export default GetStarted



