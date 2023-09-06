import React, { useState } from "react";
import "./service.css";
function Service() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(index) {
    setToggle(index);
    const divs = document.querySelectorAll(
      ".event_btn, .workshop_btn, .hackathon_btn"
    );

    // Reset the background colors for all divs
    divs.forEach((div, i) => {
      if (i === index - 1) {
        div.style.backgroundColor = getBackgroundColor(index);
      } else {
        div.style.backgroundColor = "#fff"; // Default background color
      }
    });
  }

  function getBackgroundColor(index) {
    switch (index) {
      case 1:
        return "#fae36d"; // Events
      case 2:
        return "#a7d6eb"; // Workshops
      case 3:
        return "#c4f79b"; // Hackathons
      default:
        return "#fff"; // Default background color
    }
  }

  return (
    <div className="service">
      <h1 className="text-center font-extrabold text-[24px] mb-[50px] pt-20 ">
        What we Provide as a Service
      </h1>

      {/* ---------------toggle section---------- */}
      <div className="flex justify-center mb-10 ">
        <div className="toggle__buttons inline-flex flex-col md:flex-row items-center gap-6 p-1 border border-[#777] rounded-[10px]">
          <div
            onClick={() => updateToggle(1)}
            className="event_btn bg-[#fae36d] px-32 cursor-pointer hover:bg-[#7773] transition-all duration-500 py-4 rounded-[10px] font-[550]"
          >
            Events
          </div>
          <div
            onClick={() => updateToggle(2)}
            className=" workshop_btn px-32 cursor-pointer hover:bg-[#7773] transition-all duration-500 py-4 rounded-[10px] font-[550]"
          >
            Workshops
          </div>
          <div
            onClick={() => updateToggle(3)}
            className="hackathon_btn px-32 cursor-pointer hover:bg-[#7773] transition-all duration-500 py-4 rounded-[10px] font-[550]"
          >
            Hackathons
          </div>
        </div>
      </div>
      {/* --------tab1---------------- */}
      <div className={toggle === 1 ? "show_content" : "events"}>
        <div className="relative h-[500px] bg-[#fae36d] top-[30%] flex justify-center">
          <img
            className="absolute z-20 w-[350px] left-[72%]"
            src="./images/events.png"
            alt=""
          />
          <h1 className=" top-[10%] absolute z-10 text-5xl font-[1000] text-center leading-relaxed text-[#fff] left-[30%]">
            Join{" "}
            <span className="italic text-[#514900] "> Thrilling Events </span> at{" "}
            <br />
            <span className="italic ">
              {" "}
              Lab N <span className="text-[#514900]">Box</span>{" "}
            </span>
          </h1>
          <p className="absolute z-10 text-center text-[#111] text-[20px] mt-10 top-[32%] left-[35%]">
            where we bring together young Minds to <br /> Explore, collaborate
            and celebrate the <br /> wonders of steam Education{" "}
          </p>
          <a
            href="#"
            className="text-[#111] z-10 absolute bg-[#fff] px-[80px] py-[10px] rounded-[5px] cursor-pointer top-[62%] shadow-xl left-[42%] font-semibold"
          >
            Join now
          </a>
          <img
            className="object-cover"
            src="./images/yellow.png"
            alt=""
          />
        </div>
      </div>
      {/* --------tab2---------------- */}
      <div className={toggle === 2 ? "show_content" : "events"}>
        <div className="workshops relative h-[500px] top-[30%]">
          <img
            className="absolute z-20 w-[300px] left-[77%] top-7"
            src="./images/workshop.png"
            alt=""
          />
          <h1 className=" top-[10%] absolute z-10 text-5xl font-[1000] text-center leading-relaxed text-[#fff] left-[22%]">
            Attend{" "}
            <span className="italic text-[#033043]"> Workshop Wonderland </span>{" "}
            at <br />
            <span className="italic ">
              {" "}
              Lab N <span className="text-[#033043]">Box</span>{" "}
            </span>
          </h1>
          <p className="absolute z-10 text-center text-[#111] text-[20px] mt-10 top-[32%] left-[35%]">
            Get ready to dive into an exciting realm of <br /> learning that
            will ignite your curiosity and fuel <br />
            your passion for STEAM skills.{" "}
          </p>
          <a
            href="#"
            className="text-[#111] z-10 absolute bg-[#fff] px-[80px] py-[10px] rounded-[5px] cursor-pointer top-[62%] shadow-xl left-[42%] font-semibold"
          >
            Join now
          </a>
          <img className="scale-105 absolute" src="./images/blue.png" alt="" />
        </div>
      </div>

      {/* --------tab3---------------- */}
      <div className={toggle === 3 ? "show_content" : "events"}>
        <div className="hackathon relative h-[500px] top-[30%]">
          <img
            className="absolute z-20 w-[350px] left-[72%] top-7"
            src="./images/hackathon.png"
            alt=""
          />
          <h1 className=" top-[10%] absolute z-10 text-5xl font-[1000] text-center leading-relaxed text-[#fff] left-[30%]">
            Join{" "}
            <span className="italic text-[#1C3E02]"> Thrilling Events </span> at{" "}
            <br />
            <span className="italic ">
              {" "}
              Lab N <span className="text-[#1C3E02]">Box</span>{" "}
            </span>
          </h1>
          <p className="absolute z-10 text-center text-[#111] text-[20px] mt-10 top-[32%] left-[35%]">
            where we bring together young Minds to <br /> Explore, collaborate
            and celebrate the <br /> wonders of steam Education{" "}
          </p>
          <a
            href="#"
            className="text-[#111] z-10 absolute bg-[#fff] px-[80px] py-[10px] rounded-[5px] cursor-pointer top-[62%] shadow-xl left-[42%] font-semibold"
          >
            Join now
          </a>
          <img className="scale-105 absolute" src="./images/green.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Service;
