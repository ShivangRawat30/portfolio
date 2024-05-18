import React from 'react';
import social from '../assets/projects/social.png';
import PlayToEarn from '../assets/projects/PlayToEarn.png';
import WorkCard from './WorkCard';
import HealthCare from '../assets/projects/HealthCare.jpeg';
import CharityFund from '../assets/projects/CharityFund.png';
import Ecommerce from '../assets/projects/Ecommerce.png';
import StockPrediction from '../assets/projects/StockPrediction.png'
import AI from '../assets/projects/AI.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#cfac83]">
            Work
          </p>
          <p className="py-6 text-xl"> Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
