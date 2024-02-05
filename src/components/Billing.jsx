import React from 'react'
import styles, {layout} from '../constants/style'
import { phone } from '../assets'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img className='relative z-[5] w-[100%] h-[100%]' src={phone} alt="" />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

      <div className='md:mt-20 sm:w-[570px] sm:mr-20'>
        <h1 className={`${styles.heading2}`}>Digitally pioneered,<br className='hidden sm:block'/> customer satisfaction driven.</h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Our priotity is priotizing you, our esteemed customer with the best financial service of this modern generation with interruption.</p>
        
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Billing