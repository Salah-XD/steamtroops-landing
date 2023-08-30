import React from "react";

function Detail() {
  return (
    <div className="detail py-[60px]">
      <h1 className="text-center font-extrabold text-[24px] mb-[70px]">
        Adventure Awaits Explore, Learn, Play!
      </h1>
      <div className="detail-content flex gap-3 justify-between">
        <div className="card1 text-center flex flex-col justify-center">
          <img
            src="./images/cut.png"
            alt=""
            className="w-[300px] justify-center"
          />
          <h1>Learn</h1>
          <p>
            Bite-sized learning for targeted knowledge and skills. Learn
            efficiently, at your own pace.
          </p>
        </div>
        <div className="card1 text-center">
          <img src="./images/cut.png" alt="" />
          <h1>Exciting Experiments</h1>
          <p>
            Engage with the world of science, technology, and explore
            experiments that bring theories to life.
          </p>
        </div>
        <div className="card1 text-center">
          <img src="./images/cut.png" alt="" />
          <h1>Reusable lab</h1>
          <p>
            Repeat experiments, and learn from their mistakes, promoting a
            deeper understanding of concepts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
