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
              Welcome to my corner of the digital universe! I'm Adarsh, a
              passionate and detail-oriented Software Engineer from Toronto, ON.
              Armed with an Advanced Diploma in Game Programming and a
              Bachelor's degree in Computer Science, I've embarked on a journey
              driven by excellence in software development and emerging
              technologies.
            </p>
            <br />
            <p className=" text-xl">
              My quest extends across various domains, from data analysis to
              quality assurance and web application development. I'm eagerly
              seeking opportunities to apply my expertise and contribute
              innovative solutions to progressive teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
