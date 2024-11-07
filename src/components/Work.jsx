import React from "react";
import social from "../assets/projects/social.png";
import PlayToEarn from "../assets/projects/PlayToEarn.png";
import WorkCard from "./WorkCard";
import HealthCare from "../assets/projects/HealthCare.jpeg";
import CharityFund from "../assets/projects/CharityFund.png";
import Ecommerce from "../assets/projects/Ecommerce.png";
import StockPrediction from "../assets/projects/StockPrediction.png";
import AI from "../assets/projects/AI.png";
import PlotTwist from "../assets/projects/PlotTwist.png"
import stable from "../assets/projects/stable.png";
import upgrade from "../assets/projects/upgrade.jpg";
import airdrop from "../assets/projects/airdrop.webp";
import lottery from "../assets/projects/lottery.jpeg";
import nft from "../assets/projects/nft.avif";
import TalentBlock from "../assets/projects/TalentBlock.png";
import fund from "../assets/projects/fund.webp";
import OpenArms from "../assets/projects/OpenArms.png";

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
          {/* Grid Item */}
          <WorkCard
            link={TalentBlock}
            name="TalentBlock"
            visit="https://www.hackquest.io/en/hackathon/projects/AIA-Chain-Inaugural-Hackathon-TalentBlock"
          />
          <WorkCard
            link={OpenArms}
            name="OpenArms"
            visit="https://dorahacks.io/buidl/18867"
          />
          <WorkCard
            link={PlotTwist}
            name="PlotTwistDAO"
            visit="https://devfolio.co/projects/plottwist-7dbb"
          />
          <WorkCard
            link={social}
            name="HealthCare"
            visit="https://devfolio.co/projects/care-bd47"
          />
        </div>
        <h1 className="lg:text-4xl font-bold text-[#cfac83]">
          Blockchain<span className="text-2xl ml-3">(Foundry/Hardhat)</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 ">
          {/* Grid Item */}
          <WorkCard
            link={StockPrediction}
            name="Stock Prediction"
            visit="https://github.com/ShivangRawat30/StockPrediction-Solana"
          />
          <WorkCard
            link={PlayToEarn}
            name="PlayToEarn"
            visit="https://github.com/ShivangRawat30/playToEarn"
          />
          <WorkCard
            link={CharityFund}
            name="CharityFund"
            visit="https://github.com/ShivangRawat30/Funds"
          />
          <WorkCard
            link={stable}
            name="DSCStableCoin"
            visit="https://github.com/ShivangRawat30/stableCoin"
          />
          <WorkCard
            link={upgrade}
            name="UpgradableContract"
            visit="https://github.com/ShivangRawat30/foundry_upgrades"
          />
          <WorkCard
            link={airdrop}
            name="AirDrop Merkle"
            visit="https://github.com/ShivangRawat30/merkle_airdrop"
          />
          <WorkCard
            link={nft}
            name="CreateNFT"
            visit="https://github.com/ShivangRawat30/foundry_nft"
          />
        </div>
        <h1 className="lg:text-4xl font-bold text-[#cfac83]">
          FullStack<span className="text-2xl ml-3">(Web2)</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 ">
          {/* Grid Item */}
          <WorkCard
            link={Ecommerce}
            name="LazyCart"
            visit="https://github.com/ShivangRawat30/Lazy-Cart"
          />
          <WorkCard
            link={social}
            name="Trilogs"
            visit="https://github.com/ShivangRawat30/Trilogs"
          />
          <WorkCard
            link={AI}
            name="Genius"
            visit="https://github.com/ShivangRawat30/SaaS-website"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
