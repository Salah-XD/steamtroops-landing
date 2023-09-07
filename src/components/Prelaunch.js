import React, { useState, useEffect } from "react";

function CountdownTimer() {
  // Specify the deadline date
  const deadlineDate = new Date("December 31, 2099 23:59:59").getTime();

  // Create state variables to store the countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Update the count down every 1 second (1000 milliseconds)
    const intervalId = setInterval(() => {
      // Get current date and time
      const currentDate = new Date().getTime();

      // Calculate the distance between current date and time and the deadline date and time
      const distance = deadlineDate - currentDate;

      // Calculations for remaining days, hours, minutes, and seconds
      const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remainingMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with the new countdown values
      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);

      // Clear the interval when the countdown reaches zero
      if (distance <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="prelaunch py-10">
      <center>
        <small className=" text-lg">Introducing</small>
        <img src="./images/logo.png" alt="logo" className="w-[400px] my-7" />
        <h1 className="mb-5 text-2xl">
          The most anticipated Immersive STEM Educational Kit
        </h1>
        <h2>Launching in</h2>
        <div className="countdown flex justify-center items-center gap-5">
          <div className="countdown__days">
            <div className="number text-3xl">{days}</div>
            <span>Days</span>
          </div>

          <div className="countdown__hours ">
            <div className="number text-3xl">{hours}</div>
            <span>Hours</span>
          </div>

          <div className="countdown__minutes ">
            <div className="number text-3xl">{minutes}</div>
            <span>Minutes</span>
          </div>

          <div className="countdown__seconds">
            <div className="number text-3xl">{seconds}</div>
            <span>Seconds</span>
          </div>
        </div>
        <h1 className="mb-4">
          pre-book for <strike> ₹ 200</strike>{" "}
          <span className="text-red">Free *</span>{" "}
        </h1>
        <a href="" className="text-[#fff] bg-black p-2 rounded-lg">
          Pre-Book
        </a>
        <h1 className="mt-4">
          * Avail 50% discount upto ₹ 149 + Free Delivery
        </h1>
      </center>
    </div>
  );
}

export default CountdownTimer;
