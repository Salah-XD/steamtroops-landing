import React from "react";

function Tcard() {
  return (
    <div className="tcard">
      <div className="tcard__container w-[250px]  bg-[#fff] pb-3 rounded-[8px] shadow-2xl motion-reduce:animate-bounce">
        <img
          src="./images/kid.png"
          alt=""
          className="h-[250px] object-cover rounded-t-[8px]"
        />
        <div className="sub flex items-center justify-center flex-col text-center px-2 mt-5 ">
          <p className="text-[12px]">
            Wow! Everything is included and was engaging, well explained, and
            fun
          </p>
          <div className="div mt-3">⭐ ⭐ ⭐ ⭐ ⭐</div>
        </div>
      </div>
    </div>
  );
}

export default Tcard;
