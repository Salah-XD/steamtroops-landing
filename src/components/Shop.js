import React from "react";
import Card from "./Card";
import PageNextIcon from "@rsuite/icons/PageNext";
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
function Shop() {
  return (
    <div className="bg-[#F8F5EC] py-[40px] relative ">
      <h1 className="text-center font-extrabold text-[24px] mb-4 relative z-10">
        Your Gateway To Knowledge And Innovation
      </h1>
      <p className="text-center font-light text-sm text-[#777] mb-7 relative z-10">
        Discover! Shop! Elevate Your Learning With One Time shop!
      </p>
      <div className="card flex  items-center justify-center gap-8 relative z-20 flex-wrap ">
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
      {/* <center>
        <Carousel responsive={responsive} className="img  z-20 ">
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
        </Carousel>
      </center> */}

      <img
        className="absolute w-[100px] top-[15%] left-[4%]"
        src="./images/gifs/react.gif"
        alt=""
      />
      <img
        className="absolute w-[100px] top-[15%] left-[90%] hidden sm:block "
        src="./images/gifs/react.gif"
        alt=""
      />
      <img
        className="absolute left-[-70px] top-[50%] w-[150px]"
        src="./images/gifs/chemical.gif"
        alt=""
      />
      <img
        className="absolute top-[65%] left-[90%] w-[200px] hidden sm:block"
        src="./images/gifs/chemical2.gif"
        alt=""
      />
      <img
        className="absolute top-[20%] left-[55%]"
        src="./images/gifs/blob.gif"
        alt=""
      />
      <img
        className="absolute top-[55%] left-[35%] rotate-45 "
        src="./images/dna.gif"
        alt=""
      />
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
