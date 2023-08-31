import React from "react";

function Service() {
  return (
    <div className="service">
      <h1 className="text-center font-extrabold text-[24px] mb-[50px] pt-20 ">
        What we Provide as a Service
      </h1>
      <div className="flex justify-center mb-10">
        <div className="toggle__buttons inline-flex items-center gap-6 p-1 border border-[#777] rounded-[10px]">
          <div className="px-32 cursor-pointer hover:bg-[#7773] transition-all duration-500 py-4 rounded-[10px] font-[550]">
            Events
          </div>
          <div className="px-32 cursor-pointer hover:bg-[#7773] transition-all duration-500 py-4 rounded-[10px] font-[550]">
            Workshops
          </div>
          <div className="px-32 cursor-pointer hover:bg-[#7773] transition-all duration-500 py-4 rounded-[10px] font-[550]">
            Hackathons
          </div>
        </div>
      </div>
      <div className="events relative h-[500px]">
        <h1 className="absolute z-10 text-5xl font-[1000] text-center leading-relaxed text-[#fff]	">
          Join <span className="italic text-[#514900]"> Thrilling Events </span>{" "}
          at <br />
          <span className="italic ">
            {" "}
            Lab N <span className="text-[#514900]">Box</span>{" "}
          </span>
        </h1>
        <p className="absolute z-10 text-center text-[#111] text-[20px] mt-10">
          where we bring together young Minds to <br /> Explore, collaborate and
          celebrate the <br /> wonders of steam Education{" "}
        </p>
        <a
          href="#"
          className="text-[#111 ] z-10 absolute bg-[#fff] px-[80px] py-[10px] rounded-[5px] cursor-pointer"
        >
          Join now
        </a>
        <img className="scale-105 absolute" src="./images/yellow.png" alt="" />
      </div>
    </div>
  );
}

export default Service;
