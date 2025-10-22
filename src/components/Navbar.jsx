import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo3, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-secondary`}
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
          <img
            src={logo3}
            alt="logo"
            style={{ width: "80px", height: "80px" }}
            className=" pt-1 object-contain flex-none pr-2"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Mariyana
            <span className="sm:block hidden">| Mariyana Katzarova</span>
          </p>
        </Link>
        <p className="text-red-500" asdsa></p>
      </div>
    </nav>
  );
};

export default Navbar;
