import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1100px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#cfac83]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Shivang, Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              {" "}
              I have a passion for creating high-quality code, and I'm dedicated
              to writing clean, efficient, and maintainable code that can easily
              be adapted and expanded upon in the future. my knowledge of
              various npm libraries and tools, enables me to integrate various
              features and functionalities into the applications with ease. I'm
              eager to learn and stay up-to-date with the latest advancements in
              technology. I am a team player and a problem solver at heart, who
              enjoys finding creative solutions to complex technical challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
