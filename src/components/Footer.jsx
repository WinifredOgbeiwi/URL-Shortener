import React from "react";
import footerData from "./footerData.json";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
function Footer() {
  return (
    <section className=" bg-cust-dark-violet flex flex-col sm:flex-row  justify-between items-center md:items-start py-16">
      <div className="text-2xl font-semibold text-white mb-12 md:mb-0">Shortly</div>
      <div className="flex flex-col sm:flex-row text-center gap-12 ">
        {footerData.map(({ id, heading, list }) => {
          return (
            <>
              <div key={id} className='text-white '>
                <h5 className='text-sm font-semibold'>
                  {heading}</h5>

                <div className='flex flex-col gap-2 mt-5 text-xs '>
                  {list.map((listItem, i) => 
                  <p key={i} className='hover:text-cust-cyan cursor-pointer'>{listItem} </p>)}
                </div>
              </div>

            </>
          )
        })}
      </div>
      
      <div className="flex  mt-10 md:mt-0 ml:0 md:ml-10  gap-5 text-white text-2xl ">
        <AiFillFacebook className="hover:text-cust-cyan cursor-pointer"/>
        <AiOutlineTwitter className="hover:text-cust-cyan cursor-pointer" />
        <BsPinterest className="hover:text-cust-cyan cursor-pointer" />
        <AiOutlineInstagram className="hover:text-cust-cyan cursor-pointer" />
</div>
    </section>
  );
}

export default Footer;
