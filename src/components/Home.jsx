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
        {/* <p className="text-[#8892b0] py-4 max-w-[700px] lg:max-w-[2000px] lg:text-xl lg:mt-10">
        Let’s just say beyond code, I’m all about the good stuff in life. When I’m not deep into the world of tech, you’ll probably catch me hyped up watching a UFC fight (big Alex Pereira fan here!!) or glued to a crazy throwback basketball game, Stephen Curry is hands down my most favourite player. Basketball was my life back in school, I was the team captain and went all in with every game, and the passion never really left. I’ve also got this deep-rooted thing for mountains. Growing up with my roots in the hills, I’ve always felt a special connection to those peaks, and I’m always down for a good trek. There’s something about the quiet, the views, the challenge, it’s unbeatable.
        </p> */}
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
