import React from "react";

function Dcard({ img, title, desc }) {
  return (
    <div>
      <div className="card1 items-center flex flex-col justify-center">
        <img src={img} alt="" className="w-[250px] flex justify-center mb-3" />
        <h1 className="mb-3 font-bold">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Dcard;
