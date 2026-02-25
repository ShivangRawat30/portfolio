import React from "react";
import WorkCard from "./WorkCard";


const Work = () => {
  return (
    <div name="work" className="w-full md:h-[200vh] bg-[#0a192f] text-gray-300">
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl lg:text-6xl font-bold inline border-b-4 border-[#cfac83]">
            Projects
          </p>
        </div>
        {/* Container */}
        <h1 className="lg:text-4xl font-bold text-[#cfac83]">
          Hackathon<span className="text-2xl ml-3">(Web3)</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 ">
          <WorkCard
            name="TalentBlock"
            description="A decentralized talent marketplace on AIA Chain connecting professionals and employers through verifiable on-chain credentials and reputation."
            visit="https://www.hackquest.io/en/hackathon/projects/AIA-Chain-Inaugural-Hackathon-TalentBlock"
          />
          <WorkCard
            name="OpenArms"
            description="A transparent, blockchain-based charitable giving platform enabling donors to track fund allocation end-to-end with full on-chain accountability."
            visit="https://dorahacks.io/buidl/18867"
          />
          <WorkCard
            name="PlotTwistDAO"
            description="A DAO-governed collaborative storytelling platform where token holders co-author narratives and vote on plot directions using decentralized governance."
            visit="https://devfolio.co/projects/plottwist-7dbb"
          />
          <WorkCard
            name="HealthCare"
            description="A decentralized healthcare solution enabling secure, patient-owned medical record management with permissioned access for healthcare providers."
            visit="https://devfolio.co/projects/care-bd47"
          />
        </div>
        <h1 className="lg:text-4xl font-bold text-[#cfac83]">
          Blockchain<span className="text-2xl ml-3">(Foundry/Hardhat)</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 ">
          <WorkCard
            name="Asterium"
            description="A fully autonomous,BNB Chain protocol that pools user capital, deploys it across yield-generating protocols, and scores performance in decentralized tournaments—without admin keys, off-chain automation"
            visit="https://github.com/ShivangRawat30/Asterium"
          />
          <WorkCard
            name="Stock Prediction"
            description="An on-chain stock prediction market built on Solana, allowing users to stake tokens on price movements and earn rewards for accurate forecasts."
            visit="https://github.com/ShivangRawat30/StockPrediction-Solana"
          />
          <WorkCard
            name="PlayToEarn"
            description="Smart contracts powering a play-to-earn gaming ecosystem with in-game asset ownership, reward distribution, and anti-cheat mechanics on-chain."
            visit="https://github.com/ShivangRawat30/playToEarn"
          />
          <WorkCard
            name="CharityFund"
            description="Trustless charity fund contracts with milestone-based fund release, ensuring donations are disbursed only upon verified completion of project goals."
            visit="https://github.com/ShivangRawat30/Funds"
          />
        </div>
        <h1 className="lg:text-4xl font-bold text-[#cfac83]">
          FullStack<span className="text-2xl ml-3">(Web2)</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 ">
          <WorkCard
            name="LazyCart"
            description="A full-featured e-commerce platform with product listings, cart management, order tracking, and a secure checkout flow built with React and Node.js."
            visit="https://github.com/ShivangRawat30/Lazy-Cart"
          />
          <WorkCard
            name="Trilogs"
            description="A social media platform where users can interact with other users through posts, follow connections, and engage with community content."
            visit="https://github.com/ShivangRawat30/Trilogs"
          />
          <WorkCard
            name="Genius"
            description="A SaaS platform powered by AI APIs offering code generation, image synthesis, and conversation tools, built with Next.js and a subscription billing model."
            visit="https://github.com/ShivangRawat30/SaaS-website"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;