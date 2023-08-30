import React from "react";

function Kcard({ title, img, desc, gradient, togradient }) {
  return (
    // bg-gradient-to-br from-[#AE491E] to-[#E3B40F]
    <div className="">
      <div
        style={{ background: `${gradient}` }}
        className="container text-[#fff] flex flex-col justify-center items-center gap-5 p-8 px-12 rounded-lg relative w-[350px] h-[490px] "
      >
        <div className="absolute text-xl font-semibold top-8">{title}</div>
        <img
          src={img}
          alt="chem"
          className="w-[200px] hover:w-[240px] absolute top-[22%] hover:top-[17%] transition-all duration-500 ease-in-out"
        />
        <p className=" font-thin text-[14px] absolute top-[70%]">{desc}</p>
        <a
          href="#"
          className="text-[#111] bg-white p-2 px-[100px] rounded-lg font-semibold absolute top-[85%] "
        >
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default Kcard;
