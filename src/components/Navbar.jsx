import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo3, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-black pl-0`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            //this will scroll to the top of the page
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo3} alt="logo" className="w-14 h-14 object-contain" />
          <p className=" text-white text-[18px] font-bold cursor-pointer flex">
            Mariyana &nbsp;
            <span className="sm:block hidden"> | Mariyana Katzarova</span>
          </p>
        </Link>
        {/* navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer "
            //this will toggle the menu
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            {" "}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  //this is for closing the menu when a link is clicked
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
