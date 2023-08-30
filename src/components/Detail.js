import React from "react";
import Dcard from "./Dcard";

function Detail() {
  return (
    <div className="detail py-[60px] px-[60px]">
      <h1 className="text-center font-extrabold text-[24px] mb-[70px]">
        Adventure Awaits Explore, Learn, Play!
      </h1>
      <div className="detail-content flex gap-20 justify-between">
        <Dcard />
        <Dcard />
        <Dcard />
      </div>
    </div>
  );
}

export default Detail;
