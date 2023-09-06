import React from "react";
import Kcard from "./Kcard";
import "./styles/kit.css";
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
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Kit() {
  return (
    <div className="kit bg-[url('https://i.ibb.co/bzrP4kq/grid2.png')] relative">
      <img
        className="absolute top-[8%] left-0"
        src="./images/gifs/blob.gif"
        alt=""
      />
      <img
        className="absolute top-[65%] left-[90%] hidden sm:block"
        src="./images/gifs/blob.gif"
        alt=""
      />
      <img
        className="absolute top-[30%] left-[30%]"
        src="./images/gifs/wow.gif"
        alt=""
      />
      <img
        className="absolute top-[40%] left-[60%]"
        src="./images/gifs/dipole.gif"
        alt=""
      />
      <h1 className="text-center font-extrabold text-[24px] mb-[10px] pt-20 text-[#EFBA00]">
        Access Boundless Knowledge with Subscription
      </h1>
      <p className="text-center font-light mt-2 text-[#fff]">
        Choose Your Theme
      </p>
      <center>
        <div className="cardsss flex flex-col sm:flex-row justify-center gap-[60px] my-10 relative">
          <Carousel responsive={responsive}>
            <Kcard
              title={"Chemistry Kit"}
              img={"./images/chem.png"}
              desc={"Chemistry starter kit for kids"}
              gradient={"linear-gradient(#AE491E, #E3B40F)"}
            />
            <Kcard
              title={"Biology Kit"}
              img={"./images/bio.png"}
              desc={"Biology starter kit for kids"}
              gradient={"linear-gradient(#DDD510, #7DAF12)"}
            />
            <Kcard
              title={"Steam Kit"}
              img={"./images/steam.png"}
              desc={"Chemistry starter kit for kids"}
              gradient={"linear-gradient(#6543EC, #4643EC, #D1008A)"}
            />
          </Carousel>
        </div>
      </center>
      <h2 className="text-center font-medium  text-[20px] mb-[40px] pt-5 text-[#EFBA00]">
        Discover the 'Fantastic, Remarkable' Wonders - Monthly Delivery Awaits!
      </h2>
      <div className="steps__container flex flex-col sm:flex-row justify-between text-[#fff] flex-nowrap pb-[60px]">
        <div className="steps">
          <h1>1</h1>
          <div className="sub1">
            <div className="sub__title">Choose Your Subscription</div>
            <div className="desc text-s">
              <span>select the Subscription</span> plan that <br /> suits your
              Learning goals and interest
            </div>
          </div>
        </div>
        <div className="steps">
          <h1>2</h1>
          <div className="sub2">
            <div className="sub__title">Choose Your Plan</div>
            <div className="desc">
              Kits will be delivered to the user's <br /> address based on{" "}
              <span>
                monthly, <br />3 months,6 months
              </span>{" "}
              plan.{" "}
            </div>
          </div>
        </div>
        <div className="steps">
          <h1>3</h1>
          <div className="sub3">
            <div className="sub__title">Recieve Funfilled Kit every Month</div>
            <div className="desc">
              <span>Access to Exclusive live classes</span> and <br />
              <span>Pre-recorded Micro courses</span> Conducted <br />
              Industry Professionals in Realtime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kit;
