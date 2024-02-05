import { clients } from "../constants/index"
import styles from "../constants/style"
const Clients = ({img}) => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`flex-wrap w-full ${styles.flexCenter}`}>
      {clients.map((img)=>
        <div className="flex flex-1 flex-row justify-around" key={img.id}>
          <img className="object-contain sm:w-[120px] w-[192px]" src={img.logo} alt="" />
        </div>
      )}
      </div>
    </section>
  )
}

export default Clients