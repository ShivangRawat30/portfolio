import React from "react";

const SkillsCard = ({ sr, name }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-auto mx-auto h-20" src={sr} alt={`${name} icon`} />
      <p className="my-4">{name}</p>
    </div>
  );
};

export default SkillsCard;