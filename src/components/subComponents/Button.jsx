import React from 'react'

function Button(props) {
  return (
    <>
      <button className=' bg-cust-cyan rounded-3xl py-[10px] px-6 text-white cursor-pointer  font-medium text-sm'>{props.text}</button>
    </>
  )
}

export default Button
