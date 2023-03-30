import React, { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import Button from './subComponents/Button'
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
  <nav>
        <div  className='flex items-center justify-between '>
     <a href="/"><div className='text-black font-bold text-2xl'>Shortly</div></a>
        <ul className='hidden md:flex-1 md:flex gap-6 ml-10'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className='hidden md:flex'>
          <button className='mr-10'>Login </button>
       <Button text='Sign Up'/>
        </div>
<div>
        <CgMenu className='font-semi-bold text-xl md:hidden block relative'
        onClick={()=> setNavbar(!navbar)}/>
</div>

</div>
{/* mobile view */}
        {navbar && 
            <div className='bg-purple-950 px-6 py-5 w-11/12 rounded-md text-white text-center absolute md:hidden'>
         <ul className='flex flex-col gap-5'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className=' h-[1px] w-full bg-cust-gray-violet my-5'></div>
        <div className='flex flex-col items-center justify-center '>
          <button className=''>Login </button>
              <button className='bg-cust-cyan rounded-3xl py-[10px] px-6 w-full text-white cursor-pointer my-5 font-semibold text-md'>Sign Up</button>
        </div>
        </div>
        }
   </nav>
    </>
  )
}



export default Navbar
