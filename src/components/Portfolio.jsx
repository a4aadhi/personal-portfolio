import React from "react";
import installnode from "../assets/node.png";

const Portfolio = () => {
  const webapps = [
    {
      id: 1,
      src: installnode,
    },
    {
      id: 2,
      src: installnode,
    },
    {
      id: 3,
      src: installnode,
    },
    {
      id: 4,
      src: installnode,
    },
    {
      id: 5,
      src: installnode,
    },
    {
      id: 6,
      src: installnode,
    },
  ];
  const games = [
    {
      id: 1,
      src: installnode,
    },
    {
      id: 2,
      src: installnode,
    },
    {
      id: 3,
      src: installnode,
    },
    {
      id: 4,
      src: installnode,
    },
    {
      id: 5,
      src: installnode,
    },
    {
      id: 6,
      src: installnode,
    },
  ];

  return (
    <>
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6 text-center text-2xl">Web Applications</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {webapps.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                className=" rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          
          <p className=" py-6 text-center text-2xl">Games</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {games.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                className=" rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Portfolio;
