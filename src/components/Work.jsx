import React from 'react';
import social from '../assets/projects/social.png';
import natours from '../assets/projects/natours.png';
import WorkCard from './WorkCard';
import HealthCare from '../assets/projects/HealthCare.jpeg';
import blog from '../assets/projects/blog.png';
import Ecommerce from '../assets/projects/Ecommerce.png';
import chat from '../assets/projects/chat.png'

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
          <WorkCard
            link={social}
            name="Trilogs"
            visit="https://github.com/ShivangRawat30/Trilogs"
          />
          <WorkCard
            link={natours}
            name="Natours"
            visit="https://github.com/ShivangRawat30/Natours1"
          />
          <WorkCard
            link={HealthCare}
            name="HealthCare-Web"
            visit="https://github.com/ShivangRawat30/HealthCare-web"
          />
          <WorkCard
            link={Ecommerce}
            name="LazyCart"
            visit="https://github.com/ShivangRawat30/Lazy-Cart"
          />
          <WorkCard
            link={blog}
            name="Ehya"
            visit="https://github.com/ShivangRawat30/Ehya"
          />
          <WorkCard
            link={chat}
            name="ChatBot-GPT"
            visit="https://github.com/ShivangRawat30/chat-app"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
