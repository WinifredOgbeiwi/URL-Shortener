import React from 'react'
import StatisticBox from './subComponents/StatisticBox'
import CustomizableIcon from './images/icon-fully-customizable.svg'
import RecordIcon from './images/icon-detailed-records.svg'
import BrandIcon from './images/icon-brand-recognition.svg'
import UrlLink from './UrlLink'
function Statistics() {
  return (
    <>
      <section className=' bg-cust-gray-violet'>
        <div className='-mt-32'>
        <UrlLink/></div>
        <div className='text-center '>
        <h2 className='text-2xl text-cust-dark-violet font-semibold'>Advanced Statistics</h2>
        <p className='mt-2 text-xs text-cust-text-gray'>Track how your links are performing across the web with<br/> our advanced statistics dashboard.</p>
        </div>
        <div className='flex flex-col items-center lg:items-start lg:flex-row justify-center gap-20 lg:gap-6 mt-16 '>
          <div className='h-[6px] bg-cust-cyan w-[40rem] rotate-90 lg:rotate-0 md:bottom[50%] md:left[50%] absolute'></div>
        <div>
          <StatisticBox img={BrandIcon} 
          heading = 'Brand Recognition'
          paragraph="Boost your brand recognition with each click.Generic links don't mean a thing.Branded links help instil confidence in your content."/>
   </div>
        <div className='lg:mt-12'>
          <StatisticBox img={RecordIcon}
            heading=' Detailed Records'
            paragraph=" Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions." />
</div>
          <div className=' lg:mt-20'>
          <StatisticBox img={CustomizableIcon}
            heading='Detailed RecordsFully'
            paragraph="Customizable Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
</div>
        </div>
      </section>
    </>
  )
}

export default Statistics
