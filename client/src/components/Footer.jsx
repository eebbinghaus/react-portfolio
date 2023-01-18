import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faE, faEnvelope, faSackDollar, faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="flex row justify-around fixed inset-x-0 bottom-0 z-[8]">
      <div className="text-cyan-300">
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} className="w-[40px] h-[40px]"/>
        </a>
      </div>

      <div className="text-cyan-300">
        <a href="https://github.com">
          <FontAwesomeIcon icon={faEnvelope} className="w-[40px] h-[40px]"/>
        </a>
      </div>

      <div className="text-cyan-300">
        <a href="https://github.com">
          <FontAwesomeIcon icon={faLinkedinIn} className="w-[40px] h-[40px]"/>
        </a>
      </div>

      <div className="text-cyan-300">
        <a href="https://github.com" >
          <FontAwesomeIcon icon={faSquarePhoneFlip} className="w-[40px] h-[40px]"/>
        </a>
      </div>
    </div>
  )
}

export default Footer