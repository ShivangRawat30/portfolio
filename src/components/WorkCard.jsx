import React from "react";

const WorkCard = ({ link, name, visit }) => {
  return (
    <>
      <div className=" flex justify-center my-3 mx-3 items-center w-[350px] h-[170px] border-[3px] border-black">
        <div
          style={{
            backgroundImage: `url(${link})`,
            backgroundSize: "cover",
            filter: "blur(5px)",
          }}
          className=" w-[350px] h-[170px]"
        ></div>
        <div className="flex items-center justify-center flex-col z-100 absolute bg-transparent">
          <div className="text-container">
            <span className="text-2xl text-center text-[#CFAC83] tracking-wider font-bold">
              {name}
            </span>
          </div>
          <div className="pt-8 text-center">
            <a href={visit} target="_blank">
              <button className="text-center rounded-lg px-4  text-[#CFAC83] font-bold text-2xl cursor-pointer">
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
