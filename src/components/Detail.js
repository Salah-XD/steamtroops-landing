import React from "react";
import Dcard from "./Dcard";

function Detail() {
  return (
    <div className="detail py-[60px] px-[60px]">
      <h1 className="text-center font-extrabold text-[24px] mb-[70px]">
        Adventure Awaits Explore, Learn, Play!
      </h1>
      <div className="detail-content flex flex-col sm:flex-row gap-20 justify-between">
        <Dcard
          img={"./images/gifs/phone.gif"}
          title={"Learn"}
          desc={
            "Learn from the best in the industry.Learn from the best in the industry."
          }
        />
        <Dcard
          img={"./images/gifs/rocket4.gif"}
          title={"Learn"}
          desc={
            "Learn from the best in the industry.Learn from the best in the industry."
          }
        />
        <Dcard
          img={"./images/gifs/mastercard.gif"}
          title={"Learn"}
          desc={
            "Learn from the best in the industry.Learn from the best in the industry."
          }
        />
      </div>
    </div>
  );
}

export default Detail;
