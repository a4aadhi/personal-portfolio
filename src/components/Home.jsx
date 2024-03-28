import HeroImage from "../assets/heroImage.png";
import React from "react";
import { Link } from "react-scroll";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h4 className="text-4xl sm:text-5xl font-bold text-white">
            <ReactTyped
              strings={[
                "I'm a Developer",
                "I'm a Designer",
                "I'm a FreeLancer",
                "I'm a Gamer",
              ]}
              typeSpeed={150}
              backSpeed={50}
              loop
            />
          </h4>

          <div className=" pr-5">
            <p className=" text-gray-500 py-4 max-w-md text-2xl">
              Hi, I'm Adarsh, a Software Developer proficient in both Web
              Development and Game Development,
               <br />
               <br />with a passion for bringing
              innovative products to life. I strive to create engaging and seamless
              user experiences.
            </p>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300 ">
                <MdOutlineArrowRightAlt size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt=""
            className="rounded-2xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 max-w-md p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
