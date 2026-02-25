import React from "react";

const AuditCard = ({ protocol, platform, findings, report }) => {
  return (
    <div className="flex flex-col justify-between p-6 border border-[#cfac83]/30 hover:border-[#cfac83] transition-colors duration-300 bg-[#0d2137] rounded-sm h-full">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-[#cfac83] tracking-wide">
            {protocol}
          </h3>
          <span className="text-xs font-semibold text-[#0a192f] bg-[#cfac83] px-2 py-0.5 rounded-full whitespace-nowrap">
            {platform}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {findings.map((f, i) => (
            <span
              key={i}
              className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${f.style}`}
            >
              {f.label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <a
          href={report}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#cfac83] hover:text-white transition-colors duration-200 border-b border-[#cfac83]/40 hover:border-white pb-0.5"
        >
          View Report
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

export default AuditCard;