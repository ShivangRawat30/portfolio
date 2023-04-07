import React from "react";
import ImgResizer from "../assets/projects/ImageResizer.png";
import Finance from "../assets/projects/finance.png";
import Translator from "../assets/projects/Translator.png";
import Scramble from "../assets/projects/Scramble.png";
import Piano from "../assets/projects/Piano.png";
import Todo from "../assets/projects/Todo.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#cfac83]">
            Work
          </p>
          <p className="py-6 text-xl"> Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Finance})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white tracking-wider">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://newapp-nu6c-bkhxw3yvu-shivangrawat30.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ImgResizer})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white tracking-wider">
                JS application
              </span>
              <div className="pt-8 text-center">
                <a href="https://resize-image-one.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Translator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white tracking-wider">
                JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://translator-roan-omega.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Scramble})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white tracking-wider">
                JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://scramble-game-six.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Piano})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white tracking-wider">
                JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://playablepiano.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white tracking-wider">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://todolist-six-weld.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
