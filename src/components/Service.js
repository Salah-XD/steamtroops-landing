import React from "react";

function Service() {
  return (
    <div className="service">
      <h1 className="text-center font-extrabold text-[24px] mb-[10px] pt-20 ">
        What we Provide as a Service
      </h1>
      <div className="flex justify-center">
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
      <div className="events"></div>
      <div className="workshops"></div>
      <div className="hackathons"></div>
    </div>
  );
}

export default Service;
