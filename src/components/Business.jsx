import styles, {layout} from '../constants/style'
import { features } from '../constants'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row p-6 ${index !== features.length -1} ? "mb-6" : "mb-0"`}>
        <div className={`flex justify-center items-center rounded-full w-[64px] h-[64px]`}>
          <img className={`object-contain w-[100%] h-[80%] `} src={icon} alt="" />
        </div>
        <div className={`flex flex-col flex-1`}>
          <h1 className='font-poppins text-[16px] mb-1 font-normal leading-[22px]text-white'>{title}</h1>
          <p className='font-poppins mb-1 text-[14px] font-normal leading-[22px]text-white'>{content}</p>
        </div>
    </div>
  )
}


const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${styles.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>We are customer first <br/>and service friendly</h1>
        <p className={`${styles.paragraph} max-w-[460px]`}>Digitalization has given banking and other financial institutions the boast it need to further make daily transaction easier and much more safer</p>
        <button className='rounded-lg bg-blue-700 px-3 py-2 mt-2'>Create an account?</button>

      </div>
    
      {/* mapping each property within the array to the Features component / render FeatureCard component for each element in the array */}
      <div className={`flex-col ${layout.sectionImg}`}>
        {features.map((feature, index) =>
          <FeatureCard key={feature.id} {...feature} index={index}/>
        )}
      </div>
    </section>
  )
}

export default Business