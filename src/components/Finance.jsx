import React from 'react'
import styles, {layout} from '../constants/style'
import { security } from '../assets'

const Finance = () => {
  return (
    <section className="flex flex-col md:flex-row">
      

      <div className='md:mt-20 sm:w-[570px] sm:mr-20'>
        <h1 className={`${styles.heading2}`}>State of the Art<br className='hidden sm:block'/> Security Protection.</h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Our priotity is priotizing your security and ensuring all transaction are carried out through a verified and safe channel.</p>
        
        <div>
          
        </div>
      </div>
      <div className={`${layout.sectionImgReverse}`}>
        <img className='relative z-[5] w-[100%] h-[100%]' src={security} alt="" />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>
    </section>
  )
}

export default Finance