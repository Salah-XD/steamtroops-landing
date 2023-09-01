import React from "react";
import Tcard from "./Tcard";
import "./styles/testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial py-[60px]">
      <h1 className="text-center font-extrabold text-[24px] mb-[70px]">
        Testimonial from our active Buyers
      </h1>
      <div className="content flex justify-center gap-7">
        <div className="col1 flex flex-col gap-5 ani">
          <Tcard />
          <Tcard />
        </div>
        <div className="col1 flex flex-col gap-5 mt-[100px] ani2">
          <Tcard />
          <Tcard />
        </div>
        <div className="col1 flex flex-col gap-5 ani">
          <Tcard />
          <Tcard />
        </div>
        <div className="col1 flex flex-col gap-5 mt-[100px] ani2">
          <Tcard />
          <Tcard />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
