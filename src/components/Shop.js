import React from "react";
import Card from "./Card";

function Shop() {
  return (
    <div className="bg-[#F8F5EC] py-[40px]">
      <h1 className="text-center font-extrabold text-[24px] mb-4">
        Your Gateway To Knowledge And Innovation
      </h1>
      <p className="text-center font-light text-sm text-[#777] mb-7">
        Discover! Shop! Elevate Your Learning With One Time shop!
      </p>
      <div className="card flex justify-center gap-8">
        <Card img="./images/card1.png" title="akl;djowp" />
      </div>
      <a href="#">Start Shopping</a>
    </div>
  );
}

export default Shop;
