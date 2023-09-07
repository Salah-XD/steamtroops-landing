import React from "react";
import Dcard from "./Dcard";

function Detail() {
  return (
    <div className="detail py-[60px] px-[60px]">
      <h1 className="text-center font-extrabold text-[24px] mb-[70px]">
        Why LabNBox ?
      </h1>
      <div className="detail-content flex gap-20 justify-between flex-col sm:flex-row ">
        {/* <div className="detail-content flex flex-col sm:flex-row gap-20 justify-between"> */}
        <Dcard
          img={"./images/gifs/phone.gif"}
          title={"Micro Courses"}
          desc={
            "Bite-sized learning for targeted knowledge and skills. Learn efficiently, at your own pace."
          }
        />
        <Dcard
          img={"./images/gifs/mastercard.gif"}
          title={"Exciting Experiments"}
          desc={
            "Engage with the world of science, technology, and explore experiments that bring theories to life."
          }
        />
        <Dcard
          img={"./images/gifs/rocket4.gif"}
          title={"Reusable lab"}
          desc={
            "Repeat experiments, and learn from their mistakes, promoting a deeper understanding of concepts."
          }
        />
      </div>
    </div>
  );
}

export default Detail;
