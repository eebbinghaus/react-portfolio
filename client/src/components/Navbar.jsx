import { useState } from "react";
import { logoGreen, menu, close } from "../assets";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-fill  mx-10 mb-12 flex p-1 justify-between items-center navbar z-[5] ">
       <Link
            className={`font-racing  cursor-pointer text-[20px] text-black mr-10`}
            aria-current="page"
            to="/"
          >
            
          
      <img src={logoGreen} alt="hoobank" className="w-[100px] h-[100px] p-2" />
      </Link>
      {/* <h1 className="text-white font-rubik text-[40px]">Erich Ebbinghaus</h1> */}

      <ul className="list-none md:flex hidden justify-end items-center flex-1 z-[5] font-racing">
        <li>
          <Link
            className={` cursor-pointer text-[30px] mr-10 text-[#42666E]  hover:drop-shadow-[2px_2px_.5px_#42666E] hover:text-[#d8dfee] focus:text-[#d8dfee] focus:drop-shadow-[2px_2px_.5px_#42666E]`}
            aria-current="page"
            to="/about"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className={` cursor-pointer text-[30px] mr-10 text-[#42666E]  hover:drop-shadow-[2px_2px_.5px_#42666E] hover:text-[#d8dfee] focus:text-[#d8dfee] focus:drop-shadow-[2px_2px_.5px_#42666E]`}
            aria-current="page"
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={` cursor-pointer text-[30px] mr-10 text-[#42666E]  hover:drop-shadow-[2px_2px_.5px_#42666E] hover:text-[#d8dfee] focus:text-[#d8dfee] focus:drop-shadow-[2px_2px_.5px_#42666E]`}
            aria-current="page"
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={` cursor-pointer text-[30px] text-[#42666E]  hover:drop-shadow-[2px_2px_.5px_#42666E] hover:text-[#d8dfee] focus:text-[#d8dfee] focus:drop-shadow-[2px_2px_.5px_#42666E]`}
            aria-current="page"
            to="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center mr-10">
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
          } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li>
              <Link
                className={`font-racing cursor-pointer text-[20px] text-cyan-300 mr-10`}
                aria-current="page"
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className={`font-racing cursor-pointer text-[20px] text-cyan-300 mr-10`}
                aria-current="page"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className={`font-racing cursor-pointer text-[20px] text-cyan-300 mr-10`}
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`font-racing cursor-pointer text-[20px] text-cyan-300 mr-10`}
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
