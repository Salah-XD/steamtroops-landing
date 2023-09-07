import React from "react";

function Newsletter() {
  return (
    <div className="newletter py-[40px] ">
      <div className="text-center ">
        <h1 className="text-center font-extrabold text-[24px] mb-[70px]">
          Subscribe to our Newsletter
        </h1>
        <input
          type="email"
          placeholder="E-mail"
          className="h-[30px] w-[60%] sm:w-[40%] px-8 py-8  border mb-10 "
        />
        <br />
        <a
          href="#"
          className="bg-[#111] py-5 px-8  w-[40%] h-[30px] rounded-lg"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default Newsletter;
