import React from "react";
import Card from "./Card";
import PageNextIcon from "@rsuite/icons/PageNext";
function Shop() {
  return (
    <div className="bg-[#F8F5EC] py-[40px] relative">
      <img className="absolute" src="./images/gifs/react.gif" alt="" />
      <img className="absolute" src="./images/gifs/chemical.gif" alt="" />
      <img className="absolute" src="./images/gifs/chemical2.gif" alt="" />
      <img className="absolute" src="./images/gifs/blob.gif" alt="" />
      <h1 className="text-center font-extrabold text-[24px] mb-4">
        Your Gateway To Knowledge And Innovation
      </h1>
      <p className="text-center font-light text-sm text-[#777] mb-7">
        Discover! Shop! Elevate Your Learning With One Time shop!
      </p>
      <div className="card flex justify-center gap-8">
        <Card
          img={"./images/card1.svg"}
          title={"webby DIY Chemistry Kit"}
          offer={50}
          price={1000}
          originalPrice={2000}
        />
        <Card
          img={"./images/card1.svg"}
          title={"webby DIY Chemistry Kit"}
          offer={50}
          price={1000}
          originalPrice={2000}
        />
        <Card
          img={"./images/card1.svg"}
          title={"webby DIY Chemistry Kit"}
          offer={50}
          price={1000}
          originalPrice={2000}
        />
        <Card
          img={"./images/card1.svg"}
          title={"webby DIY Chemistry Kit"}
          offer={50}
          price={1000}
          originalPrice={2000}
        />
        <Card
          img={"./images/card1.svg"}
          title={"webby DIY Chemistry Kit"}
          offer={50}
          price={1000}
          originalPrice={2000}
        />
      </div>
      <div className=" flex gap-[2px]  btn justify-center items-center mt-7">
        <a
          href="#"
          className=" flex  bg-[#EFBA00] max-w-max text-[#fff] p-5 rounded-l-[8px] px-7"
        >
          Start Shopping{" "}
        </a>
        <PageNextIcon
          color="#fff"
          className="bg-[#EFBA00] text-[63.5px] py-5 rounded-r-[8px] w-8"
        />
      </div>
    </div>
  );
}

export default Shop;
