import React from 'react'
import {stats} from '../constants/index'
import styles from '../constants/style'



const Stats = () => {
  return (
    <section className={`flex-row flex-wrap ${styles.flexCenter}`}>
      {stats.map((stat)=> 
        <div key={stat.id} className={`flex flex-row flex-1 justify-start items-center m-3 font-poppins text-[30px] xs:text-[43px] leading-[43px]`}>
          <h1 className='font-poppins text-[15px] xs:text-[20px] uppercase'>{stat.title}</h1>
          <p className='text-gradient text-[15px] xs:text-[20px] uppercase ml-3 leading-[21px] xs:leading-[]'>{stat.value}</p>
        </div>
        )}
    </section>
  )
}

export default Stats