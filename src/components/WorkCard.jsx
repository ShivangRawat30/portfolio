import React from "react";

const WorkCard = ({ name, description, visit }) => {
  return (
    <div className="flex flex-col justify-between p-6 border border-[#cfac83]/30 hover:border-[#cfac83] transition-colors duration-300 bg-[#0d2137] rounded-sm h-full">
      <div>
        <h3 className="text-lg font-bold text-[#cfac83] tracking-wide mb-3">
          {name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-6">
        <a
          href={visit}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#cfac83] hover:text-white transition-colors duration-200 border-b border-[#cfac83]/40 hover:border-white pb-0.5"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;