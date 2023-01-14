import { useState } from "react";
import { close, logo, menu, name } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-fill mx-10 mb-12 flex p-1 justify-between items-center navbar">
       <Link
            className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
            aria-current="page"
            to="/"
          >
            
          
      <img src={logo} alt="hoobank" className="w-[200px] h-[200px] " />
      </Link>
      {/* <h1 className="text-white font-rubik text-[40px]">Erich Ebbinghaus</h1> */}

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li>
          <Link
            className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
            aria-current="page"
            to="/about"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
            aria-current="page"
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
            aria-current="page"
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={`font-poppins font-normal cursor-pointer text-[20px] text-white `}
            aria-current="page"
            to="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-10">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li>
              <Link
                className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
                aria-current="page"
                to="/"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
                aria-current="page"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
                aria-current="page"
                to="/resume"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
