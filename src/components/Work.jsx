import React from 'react';
import ImgResizer from '../assets/projects/ImageResizer.png';
import Finance from '../assets/projects/finance.png';
import Translator from '../assets/projects/Translator.png';
import Scramble from '../assets/projects/Scramble.png';
import Piano from '../assets/projects/Piano.png';
import Todo from '../assets/projects/Todo.png';
import social from '../assets/projects/social.png';
import natours from '../assets/projects/natours.png';
import WorkCard from './WorkCard';

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
            visit="https://trilogs.vercel.app/"
          />
          <WorkCard
            link={natours}
            name="Natours"
            visit="https://natours-8idy.onrender.com/"
          />
          <WorkCard
            link={Finance}
            name="React"
            visit="https://newapp-nu6c-bkhxw3yvu-shivangrawat30.vercel.app/"
          />
          <WorkCard
            link={ImgResizer}
            name="Image resizer"
            visit="https://resize-image-one.vercel.app/"
          />
          <WorkCard
            link={Translator}
            name="Translator"
            visit="https://translator-roan-omega.vercel.app/"
          />
          <WorkCard
            link={Todo}
            name="Todo app"
            visit="https://todolist-six-weld.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
