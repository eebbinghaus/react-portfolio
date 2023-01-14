import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="text-white">
      <h2>Contact Me</h2>
      <ul class="contact">
        <li>
          <a href="mailto:eebbinghaus@gmail.com">
            Email: eebbinghaus@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.github.com/eebbinghaus" target="_blank">
            GitHub: github.com/eebbinghaus
          </a>
        </li>
      </ul>
      <div>
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
