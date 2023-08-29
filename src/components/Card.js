import React from "react";

function Card(img, title) {
  return (
    <div className="card w-[210px] h-[340px] flex-col flex gap-2 bg-[#fff] shadow-lg  p-[12px] rounded-[12px]">
      <div className="img rounded-[12px] bg-[#f2f2f2] ">
        {/*not working */}
        <div>
          <img className="w-[263px] p-[24px]" src={img} alt="img" />
        </div>
        <div className="text text-[#fff] bg-red-600 px-5 text-[12px] py-4 text-center rounded-b-[12px]">
          Launch offer 50 %
        </div>
      </div>
      <h3
        style={{ fontFamily: "Nunito,sans-serif", fontWeight: 900 }}
        className="text-[14px]"
      >
        {title}
      </h3>
      <h4 className="text-[17px] font-extralight">
        Rs. 1000s{" "}
        <span className=" ">
          <small>
            <strike>Rs. 2000</strike>
          </small>
        </span>
      </h4>
      <small className="text-[9px] text-[#777777]">
        You save Rs.1000 on launch offer
      </small>
    </div>
  );
}

export default Card;
