import React from "react";
import AuditCard from "./AuditCard";

const Audit = () => {
  return (
    <div name="audit" className="w-full bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl lg:text-6xl font-bold inline border-b-4 border-[#cfac83]">
            Auditing Experience
          </p>
          <p className="text-gray-400 mt-4 text-sm">
            Security audits participated in and reports submitted across competitive and solo engagements.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {/* 7H 5M */}
          <AuditCard
            protocol="Mystic-monorepo"
            platform="Cantina"
            findings={[
              { label: "7 High", style: "border-red-500/50 text-red-400" },
              { label: "5 Medium", style: "border-orange-400/50 text-orange-300" },
            ]}
            report="https://github.com/Bizarro0x13/Bizarro0x13/blob/main/Reports/mystic-monorepo.md"
          />
          {/* 3H */}
          <AuditCard
            protocol="AlchemixV3"
            platform="Immunefi"
            findings={[
              { label: "3 High", style: "border-red-500/50 text-red-400" },
            ]}
            report="https://github.com/Bizarro0x13/Bizarro0x13/blob/main/Reports/AlchemixV3.md"
          />
          {/* 2H */}
          <AuditCard
            protocol="Vechain | Stargate"
            platform="Immunefi"
            findings={[
              { label: "2 High", style: "border-red-500/50 text-red-400" },
            ]}
            report="https://github.com/Bizarro0x13/Bizarro0x13/blob/main/Reports/VeChain.md"
          />
          {/* 1H 2M */}
          <AuditCard
            protocol="telcoin-network"
            platform="Cantina"
            findings={[
              { label: "1 High", style: "border-red-500/50 text-red-400" },
              { label: "2 Medium", style: "border-orange-400/50 text-orange-300" },
            ]}
            report="https://github.com/Bizarro0x13/Bizarro0x13/blob/main/Reports/telcoin-network.md"
          />
          {/* 1H 1M */}
          <AuditCard
            protocol="DODO cross chain DEX"
            platform="Sherlock"
            findings={[
              { label: "1 High", style: "border-red-500/50 text-red-400" },
              { label: "1 Medium", style: "border-orange-400/50 text-orange-300" },
            ]}
            report="https://github.com/Bizarro0x13/Bizarro0x13/blob/main/Reports/DODO.md"
          />
          <AuditCard
            protocol="MORE"
            platform="Github"
            findings={[]}
            report="https://github.com/Bizarro0x13"
          />
        </div>
      </div>
    </div>
  );
};

export default Audit;