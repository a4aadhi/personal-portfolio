import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <div>
            <p className=" text-xl mt-20 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              nesciunt alias cumque dolore. Non consectetur quas, vel aliquid
              quidem explicabo, vero ab tempore, nulla repellat quibusdam soluta
              adipisci minima. Accusamus minus possimus eum perferendis.
            </p>
            <br />
            <p className=" text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              amet suscipit officiis, obcaecati dicta quaerat aspernatur.
              Asperiores saepe neque, laudantium ex tempore unde qui earum
              facere rerum. Accusantium, iusto provident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
