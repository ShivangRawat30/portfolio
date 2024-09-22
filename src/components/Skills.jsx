import React from "react";
import SkillsCard from "./SkillsCard";
import Ethereum from "../assets/Ethereum.png";
import TypeScript from "../assets/TypeScript.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Solidity from "../assets/Solidity.png";
import NEXT from "../assets/NEXT.png";
import Rust from "../assets/Rust.png";
import Mongo from "../assets/mongo.png";
import Solana from "../assets/Solana.png";
import Anchor from "../assets/anchor.png";
import HardHat from "../assets/Hardhat.png";
import Cpp from "../assets/C++.png";
import Redux from "../assets/redux.png";
import Postman from "../assets/Postman.png";
import Git from "../assets/Git.png";
import foundry from "../assets/foundry.png";


const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto bg-[#0a192f] text-gray-300 sm:h-full ">
      {/* Container */}
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#cfac83] lg:text-6xl">
            Skills
          </p>
          <p className="py-4 text-xl">
            {" "}
            These are the technologies I've Worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillsCard sr={Solidity} name="Solidity" />
          <SkillsCard sr={Ethereum} name="Ethereum" />
          <SkillsCard sr={foundry} name="foundry" />
          <SkillsCard sr={HardHat} name="HardHat" />
          <SkillsCard sr={Rust} name="Rust" />
          <SkillsCard sr={Solana} name="Solana" />
          <SkillsCard sr={JavaScript} name="JavaScript" />
          <SkillsCard sr={TypeScript} name="TypeScript" />
          <SkillsCard sr={ReactImg} name="React" />
          <SkillsCard sr={Node} name="NodeJS" />
          <SkillsCard sr={Mongo} name="MongoDB" />
          <SkillsCard sr={Cpp} name="C++" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
