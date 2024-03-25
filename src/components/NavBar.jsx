import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../assets/icon.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const Links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <img className="flex justify-center w-20  ml-2" src={icon} alt="icon" />
      </div>
      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <a href=""></a>
              {link}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-4 z-10 text-gray-500 md:hidden"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {nav && (<ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {Links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <a href=""></a>
              {link}
            </li>
          );
        })}
      </ul>)}
      
    </div>
  );
};

export default NavBar;