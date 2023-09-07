import React from "react";

function Incubation() {
  return (
    <div className="incubation p-[60px]">
      <div className="incontainer flex justify-center items-center  gap-10 sm:gap-20 flex-col sm:flex-row">
        <div className="imgsection">
          <h1 className="font-bold text-2xl text-center">
            Incubated and Backed by
          </h1>
          <img src="./images/ndbi.png" alt="" className="w-[1500px]" />
        </div>
        <div className="incontent text-xl text-center sm:text-left">
          Our efforts and commitment towards building Indigenously designed
          Immersive STEM Educational Kits was recognized by India’s premium
          Design incubator,
          <strong>
            {" "}
            National Design Business Incubator, National Institute of Design,
            Ahmedabad,
          </strong>{" "}
          which is directly supported by the{" "}
          <strong>
            Department of Science and Technology, Government Of India.
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Incubation;
