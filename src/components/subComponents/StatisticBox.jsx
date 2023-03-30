import React from 'react'
function StatisticBox(props) {
  return (
    <div className='bg-white w-72 px-5 py-7 rounded-lg relative'>
          <div className=' bg-cust-dark-violet rounded-full w-16 p-4 -mt-16 ml-[36%] lg:ml-2'>
          <img src={props.img} alt="" className='w-full '/>
          </div>
          <h4 className='font-semibold my-4 text-center md:text-start'>{props.heading}.</h4>
      <p className='text-sm text-cust-text-gray font-medium text-center md:text-start'>{props.paragraph}</p>
    </div>
  )
}

export default StatisticBox
