import React from "react";

const WorkCard = ({ link, name, visit }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${link})`,backgroundSize: 'cover'  }}
        className="shadow-lg shadow-[rgb(4,12,22)] hover:bg-orange group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100 duration-300">
          <span className="text-2xl text-center text-white tracking-wider">{name}</span>
          <div className="pt-8 text-center">
            <a href={visit} target="_blank">
              <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl cursor-pointer">
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
