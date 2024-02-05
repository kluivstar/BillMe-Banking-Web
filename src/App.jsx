import styles from './constants/style'
import React from 'react'
import {Navbar, Hero, Billing, Stats, Business, Clients, Testimonials, CTA, Finance, Footer} from './components'

const App = () => {
  return (
    <div className='bg-primary text-white w- full overflow-hidden'>

        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

        <div className={` ${styles.flexStart
        }`}>
          <div className={` ${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>

        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <Finance/>
            <Testimonials/>
            <Clients/>
            <Footer/>
          </div>
        </div>

    </div>
  )
}

export default App