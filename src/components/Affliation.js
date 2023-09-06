import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    autoPlay: true, // Enable auto-scroll
    autoPlaySpeed: 2000,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    autoPlay: true, // Enable auto-scroll
    autoPlaySpeed: 2000,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    autoPlay: true, // Enable auto-scroll
    autoPlaySpeed: 2000,
  },
};

function Affliation() {
  return (
    <div className="aff bg-[#EEEEED] p-[30px] sm:p-[70px]">
      <h2 className="text-center font-extrabold text-[24px] mb-10">
        Our Affliation
      </h2>
      <center>
        <Carousel responsive={responsive} infinite={true} className="img ">
          <img
            src="./images/image 4.png"
            alt=""
            className="w-[220px] object-contain  	bg-[#fff] p-5 shadow-xl rounded-lg "
          />
          <img
            src="./images/image 5.png"
            alt=""
            className="w-[220px] object-contain 	bg-[#fff] p-5 shadow-xl rounded-lg"
          />
          <img
            src="./images/image 6.png"
            alt=""
            className="w-[220px] object-contain	bg-[#fff] p-5 shadow-xl rounded-lg"
          />
          <img
            src="./images/image 7.png"
            alt=""
            className="w-[220px] object-contain	bg-[#fff] p-5 shadow-xl rounded-lg"
          />
          <img
            src="./images/image 8.png"
            alt=""
            className="w-[220px] object-contain	bg-[#fff] p-5 shadow-xl rounded-lg"
          />
        </Carousel>
      </center>
    </div>
  );
}

export default Affliation;
