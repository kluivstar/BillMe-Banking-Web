import React from 'react'
import { heroImg } from '../assets'
import styles from '../constants/style'
const Hero = () => {
  return (

    /* HERO SECTION */
    <section className={`flex flex-col md:flex-row ${styles.paddingY}`}>

      {/*Hero Left Side */}
      <div className={`flex-1 ${styles.flexStart} xl:px-0 flex-col px-6 sm:px-16 sm:-mt-10`}>
        <div className='flex flex-row w-full justify-between'>
          <h1 className='font-poppins font-semibold text-[51px] sm:text-[82px] leading-[75px] ss:leading-[82px]'>Daily <br className='hidden sm:block'/> {""}
            <span className='text-gradient'>Banking</span> {""}
          </h1>
          
        </div>
        <h1 className='font-poppins font-semibold text-[51px] sm:text-[82px] leading-[75px] ss:leading-[82px]'>Digitalized</h1>
        <p className={` ${styles.paragraph} mt-5 max-w-[480px]`}>Everyday we draw more closer to an age of total digitalization, security is enhanced and transactions are faster now, we are the bank for the future
          
        </p>
      </div>

      {/* right Side */}
      <div>
          <img className='-mt-5 relative z-[5] w-[100%] h-[100%]' src={heroImg} alt="" />
          {/* Gradient */}
        
        
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'>

        </div>
      </div>

    </section>
  )
}

export default Hero