import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Affliation() {
  return (
    <div className="aff bg-[#EEEEED] p-[70px]">
      <h2 className="text-center font-extrabold text-[24px] mb-10">
        Our Affliation
      </h2>
      <div className="img flex justify-center gap-5 flex-wrap  ">
      {/* <Carousel responsive={responsive} className="img "> */}
        <img
          src="./images/image 4.png"
          alt=""
          className="w-[220px] object-contain  	bg-[#fff] p-5 shadow-xl "
        />
        <img
          src="./images/image 5.png"
          alt=""
          className="w-[220px] object-contain 	bg-[#fff] p-5 shadow-xl"
        />
        <img
          src="./images/image 6.png"
          alt=""
          className="w-[220px] object-contain	bg-[#fff] p-5 shadow-xl"
        />
        <img
          src="./images/image 7.png"
          alt=""
          className="w-[220px] object-contain	bg-[#fff] p-5 shadow-xl"
        />
        <img
          src="./images/image 8.png"
          alt=""
          className="w-[220px] object-contain	bg-[#fff] p-5 shadow-xl"
        />
      {/* </Carousel> */} 
      </div>
    </div>
  );
}

export default Affliation;
