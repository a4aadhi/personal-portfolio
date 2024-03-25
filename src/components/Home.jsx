import HeroImage from "../assets/heroImage.png";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = () => {
  return (
    <div name= 'home' className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className=" flex flex-col justify-center h-full">
                <h2 className=" text-4xl sm:text-7xl font-bold text-white">
                    I'm a full stack developer

                </h2>
                <p className=" text-gray-500 py-4 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum laborum animi suscipit, cumque ullam quia quas exercitationem repudiandae, aspernatur pariatur praesentium totam minus quaerat distinctio consectetur ratione non assumenda?
                    
                </p>
                <div>
                    <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
                        Portfolio
                        <span className=" group-hover:rotate-90 duration-300 "><MdOutlineArrowRightAlt size={30} className="ml-1"/></span>
                    </button>

                </div>

            </div>
            <div>
            <img src={HeroImage} alt="" className="rounded-2xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-500  " />
        </div>
            
            
        </div>
        
    </div>
    
  );
};

export default Home;
