import React from 'react'

const WorkCard = ({link,name,visit}) => {
  return (
    <>
    <div
            style={{ backgroundImage: `url(${link})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white tracking-wider">
                {name}
              </span>
              <div className="pt-8 text-center">
                <a href={visit} target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-gray-700 font-bold text-2xl">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          </>
  )
}

export default WorkCard