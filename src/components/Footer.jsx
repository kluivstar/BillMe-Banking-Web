import { footerLinks, socialMedia } from "../constants"
import styles, {layout} from "../constants/style"
import { logo } from "../assets"

const Footer = () => {
  return (
    /* Entire section is a column */
    <section className={`flex-col ${styles.paddingY} ${styles.flexCenter}`}>

      {/* Foooter Image & Link */}

      {/* flex-col usually, md:flex-row */}
      <div className={`flex flex-col md:flex-row w-full ${styles.flexStart}`}>

        {/* Logo */}
        <div className="flex flex-col justify-start flex-1">
          <img className="w-[30%] object-contain" src={logo} alt="" />
          <p className={`${styles.paragraph}`}>Dreams Redigitalized</p>
        </div>
        
        {/* Links */}
        {/* Overall CONTAINER [ ] is given a flex- row properity */}
        <div className="flex flex-row justify-between flex-[1.5] flex-wrap w-[full] md:mt-0 mt-10">
          {footerLinks.map((footer)=>
          /* flex-col for column layout for inner elements, we first displayed the footer title then an unorder list underneath it*/

          <div className="flex flex-col my-4 min-w-[150px]" key={footer.key}>
            <h3 className="font-poppins leading-[30px] text-[18px] font-medium">{footer.title}</h3>
            <ul>
              {footer.links.map((link, index)=>
              <li className={`cursor-pointer font-poppins text-[14px] text-dimWhite leading-[24px] hover:text-secondary ${index !== footer.links.length -1 ? "mb-4": 'mb-0'}`} key={link.name}>
                {link.name}
              </li>
              )}
            </ul>
          </div>
          )}
        </div>
      </div>
      {/* Social Media */}
      <div className={`flex w-full border-t-[1px] border-t-[#3f3e44] flex-col md:flex-row gap-20 justify-between`}>
        <p className={styles.paragraph}>Billme 2024. All right reserved</p>
        <div className="flex flex-row">
          {socialMedia.map((media, index)=>
          <img 
          key={media.id} 
          src={media.icon} 
          onClick={()=> window.open(social.link)}
          className={`object-contain cursor-pointer w-[20px] h-[20] ${index !==socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} 
          />
          
          )}
        </div>

      </div>
      
    </section>
  )
}

export default Footer