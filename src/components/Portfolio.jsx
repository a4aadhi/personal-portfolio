import React from "react";
import cartRunner from "../assets/portfolio/cartrunner.png";
import biohazard from "../assets/portfolio/biohazardOutbreak.png";
import charliesAdventure from "../assets/portfolio/charliesAdventures.png";
import sharewheels from "../assets/portfolio/sharewheels.png";
import tiktok from "../assets/portfolio/tiktokUI.jpg";
import covid19 from "../assets/portfolio/covid19.jpg";

const Portfolio = () => {
  const webapps = [
    {
      id: 1,
      title: "ShareWheels",
      src: sharewheels,
      demo: "https://latest-a4aadhis-projects.vercel.app/",
      git: "https://github.com/a4aadhi/ShareWheels"
    },
    {
      id: 2,
      title: "Crypto Cap",
      src: "https://freepngimg.com/thumb/bitcoin/59535-cryptocurrency-logo-unlimited-bitcoin-cash-download-free-image.png",
      demo: "https://crypto-cap-five.vercel.app/",
      git: "https://github.com/a4aadhi/crypto_cap"
    },
    {
      id: 3,
      title: "TikTok Clone",
      src: tiktok,
      demo: "https://tik-tok-clone-alpha.vercel.app/",
      git: "https://github.com/a4aadhi/TikTokClone"
    },
    {
      id: 4,
      title: "COVID-19 Healthcare Monitor",
      src: covid19,
      demo: "https://comp-308-final-project.vercel.app/",
      git: "https://github.com/a4aadhi/COMP308_FinalProject",
    },
    ,
    {
      id: 5,
      title: "StudentHub",
      src: "https://img.freepik.com/free-vector/hand-drawn-flat-design-mba-illustration_23-2149347419.jpg?t=st=1731779690~exp=1731783290~hmac=3ed6d0a49f39463ce4433c54e3c0148f18a4edcd7a70428c428cff72dab5cf55&w=1060",
      demo: "https://github.com/a4aadhi/StudentDataCRUDApp",
      git: "https://github.com/a4aadhi/StudentDataCRUDApp",
    },
  ];
  const games = [
    {
      id: 1,
      title: "Charlie's Adventures",
      src: charliesAdventure,
      demo: "https://simmer.io/@a4aadhi/charlie-s-adventures",
      git: "https://github.com/bastyle/comp305-group-project"
    },
    {
      id: 2,
      title: "Biohazard: Outbreak Nightmares Unleashed",
      src: biohazard,
      demo: "https://biohazardoutbreak1.wordpress.com/",
      git: "https://github.com/TechRealmGamer/Biohazard-Outbreak-Nightmares-Unleashed"
    },
    {
      id: 3,
      title: "CartRunner",
      src: cartRunner,
      demo: "https://github.com/a4aadhi/cartrunner",
      git: "https://github.com/a4aadhi/cartrunner"
    },
  ];
  const handleDemo = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };
  const handleGit = (gitUrl) => {
    window.open(gitUrl, '_blank');
  }

  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6 text-center text-2xl">Web Applications</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {webapps.map(({ id, title, src, demo, git }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  className="rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt={title}
                />
                <p className="text-center text-lg font-bold">{title}</p>
                <div className="flex items-center justify-center">
                  <button onClick={() => handleDemo(demo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button onClick={() => handleGit(git)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
        className="bg-gradient-to-t from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="py-6 text-center text-2xl">Games</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {games.map(({ id, title, src, demo, git }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  className="rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt={title}
                />
                <p className="text-center text-lg font-bold">{title}</p>
                <div className="flex items-center justify-center">
                  <button onClick={() => handleDemo(demo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button onClick={() => handleGit(git)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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

