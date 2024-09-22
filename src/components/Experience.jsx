import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-[200vh] bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1100px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl lg:text-7xl font-bold inline border-b-4 border-[#cfac83]">
              Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col gap-[100px] mt-[100px]">
          <div className="max-w-[1100px] lg:max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-3xl font-bold ">
              <p>Bookie Bot</p>
              <p className="text-xl">Aug 2024 - Sept 2024 (Freelance)</p>
            </div>
            <div>
              <p className="lg:text-xl">
                {" "}
                Developed a Node.js/TypeScript bot for The Bookie website that
                automates gameplay. Admins can create and manage multiple bots,
                each capable of betting with Ethereum on their behalf. To ensure
                game continuity, the bot system automatically deploys three bots
                with random bets when there are insufficient human players.
              </p>
            </div>
          </div>
          <div className="max-w-[1100px] lg:max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <p className="lg:text-xl flex text-end justify-end">
                {" "}
                Developed a full-stack blockchain lottery application using
                Foundry for smart contracts, MERN for the frontend, and Node.js
                for the backend. Users can participate in multiple lottery
                rounds, with their chances of winning proportional to their bet.
                The winner receives 95% of the total prize pool, while 5% goes
                to the platform administrator.
              </p>
            </div>
            <div className="sm:text-right text-3xl font-bold flex flex-col items-start">
              <p>Bookie</p>
              <p className="text-xl">Jun 2024 - Aug 2024 (Freelance)</p>
            </div>
          </div>
          <div className="max-w-[1100px] lg:max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-3xl font-bold ">
              <p>Solo Token</p>
              <p className="text-xl">May 2024 - Jun 2024 (Freelance)</p>
            </div>
            <div>
              <p className="lg:text-xl">
                {" "}
                Developed Solo Token, a WebApp utilizing Rust, Next.js, Solana
                SPL library, and JavaScript. Solidity, Hardhat, Ethers.js,
                ThirdWeb, Typescript, JavaScript, Solana, ReactJS, NextJS Redux,
                Redux Toolkit, NodeJS, ExpressJS, MongoDB, Mongoose, REST API,
                Git Apr 2024 - Present • Implemented a unique betting mechanism,
                wherein users wager 0.1 SOL within a 30-minute time window, with
                the last user claiming the entire prize pool, resulting in a 50%
                increase in user engagement.
              </p>
            </div>
          </div>
          <div className="max-w-[1100px] lg:max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <p className="lg:text-xl text-end">
                {" "}
                Developed a Fullstack website with centralized and decentralized
                backend, resulting in a 30% increase in scalability and 25%
                reduction in latency. • Integrated chainlink for automation and
                randomess using ERC20 tokens • Leveraged MongoDB for storing
                data points with events emitted from the contract, with an
                average response time of 200ms.
              </p>
            </div>
            <div className="sm:text-right text-3xl font-bold flex flex-col items-start">
              <p>Software Developer Intern (TimelessNYC)</p>
              <p className="text-xl">Mar 2024 - May 2024 (Remote)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
