import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#cfac83]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shivang Rawat
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a 
          {" "}
          <ReactTyped
            strings={["BlockChain Developer", "Full Stack Developer", "Freelancer"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          As a Blockchain/full stack developer, I possess a strong understanding of both
          front-end, back-end and web3 technologies. I have experience working with a
          variety of programming languages, including but not limited to
          JavaScript, React, NextJS. On the front-end, I am proficient in developing
          Secure Web3 Dapps using modern Technologies such as Rust, Anchor and Solidity, On
          the back-end, I have experience with server-side programming using
          technologies such as Node.js. I am also proficient in working with
          databases, including MongoDB.
        </p>
        <div>
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
