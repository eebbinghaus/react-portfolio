import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
    faE,
    faEnvelope,
    faSackDollar,
    faSquarePhoneFlip,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="flex row justify-around fixed inset-x-0 bottom-0 z-[8] pt-4">
            <div className="text-[#cbf83e] drop-shadow-[2px_2px_.5px_#42666E] hover:text-cyan-300 hover:transition ease-in-out delay-150 duration-300">
                <a href="https://www.github.com/eebbinghaus" target="_blank">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="w-[40px] h-[40px]"
                    />
                </a>
            </div>

            <div className="text-[#cbf83e] drop-shadow-[2px_2px_.5px_#42666E] hover:text-cyan-300 hover:transition ease-in-out delay-150 duration-300">
                <a href="mailto:eebbinghaus@gmail.com">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-[40px] h-[40px]"
                    />
                </a>
            </div>

            <div className="text-[#cbf83e] drop-shadow-[2px_2px_.5px_#42666E] hover:text-cyan-300 hover:transition ease-in-out delay-150 duration-300">
                <a
                    href="https://www.linkedin.com/in/erich-ebbinghaus-aa9a47259"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="w-[40px] h-[40px]"
                    />
                </a>
            </div>

            <div className="text-[#cbf83e] drop-shadow-[2px_2px_.5px_#42666E] hover:text-cyan-300 hover:transition ease-in-out delay-150 duration-300">
                <a href="tel:970-231-6217">
                    <FontAwesomeIcon
                        icon={faSquarePhoneFlip}
                        className="w-[40px] h-[40px]"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
