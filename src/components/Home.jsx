import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#cfac83] lg:text-5xl">Hi, my name is</p>
        <h1 className="lg:text-9xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shivang Rawat
        </h1>
        <h2 className="lg:text-6xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a 
          {" "}
          <ReactTyped
            strings={["Blockchain Developer", "Security Auditor", "Freelancer"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h2>
        <div className="lg:mt-10">
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button
              className="text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#cfac83] hover:border-[#cfac83] "
              to="work"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
