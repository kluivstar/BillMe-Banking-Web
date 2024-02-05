
import styles from '../constants/style'
import { testimonial } from '../constants'
import TestCard from '../components/TestCard'

const Testimonials = () => {
  return (
    <section className={`flex-col ${styles.flexCenter} ${styles.paddingY}`}>
      <div className='flex justify-between items-center w-full flex-col md:flex-row mb-6'>
        <h1 className={styles.heading2}>A word from people <br/> that loves us</h1>
        <div className='mt-6 w-full'>
          <p className={`text-left ${styles.paragraph}`}>Its never been this easy to transact safelessy and more efficiently in the history of commerce.</p>
        </div>
        
      </div>

      <div className='flex flex-row  justify-center flex-wrap '>
        {testimonial.map((test)=> (
          <TestCard key={test.id} {...test}/>
          ))}
      </div>
    </section>
  )
}

export default Testimonials