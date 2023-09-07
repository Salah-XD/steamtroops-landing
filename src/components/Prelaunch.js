import React, { useState, useEffect } from "react";
import "./styles/counter.css";
import moment from "moment";
import ReactDOM from "react-dom";
// import Countdown from "./counter";

//new

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <h1>Countdown</h1>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              <SVGCircle radius={daysRadius} />
              {days}
              <span>days</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span>hours</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span>minutes</span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item">
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span>seconds</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      strokeWidth={4} // Correct attribute name
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

ReactDOM.render(
  <Countdown
    timeTillDate="05 26 2019, 6:00 am"
    timeFormat="MM DD YYYY, h:mm a"
  />,
  document.getElementById("app")
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

//end

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
        {/* <h2>Launching in</h2> */}
        {/* <div className="countdown flex justify-center items-center gap-5">
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
        </div> */}
        {/* <div className="col-xs-12">
          <h4 align="center">Days Until Christmas</h4>
          <section id="count-up-section" className="count-up-section">
            <div className="container">
              <div className="row">
                <div
                  className="col-xs-12"
                  style={{
                    height: "30vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  //   style="height: 30vh; display: flex; align-items: center; justify-content: center;"
                >
                  <div className="flipTimemodulesboxes">
                    <div className="flipTimebox">
                      <div className="flipclock1"></div>
                      <div className="flipclock1message"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
        <div id="app"></div>

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
import React, { useState, useEffect } from "react";
import "./styles/counter.css";
import moment from "moment";
import ReactDOM from "react-dom";
// import Countdown from "./counter";

//new

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <h1>Countdown</h1>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              <SVGCircle radius={daysRadius} />
              {days}
              <span>days</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span>hours</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span>minutes</span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item">
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span>seconds</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      strokeWidth={4} // Correct attribute name
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

ReactDOM.render(
  <Countdown
    timeTillDate="05 26 2019, 6:00 am"
    timeFormat="MM DD YYYY, h:mm a"
  />,
  document.getElementById("app")
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

//end

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
        {/* <h2>Launching in</h2> */}
        {/* <div className="countdown flex justify-center items-center gap-5">
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
        </div> */}
        {/* <div className="col-xs-12">
          <h4 align="center">Days Until Christmas</h4>
          <section id="count-up-section" className="count-up-section">
            <div className="container">
              <div className="row">
                <div
                  className="col-xs-12"
                  style={{
                    height: "30vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  //   style="height: 30vh; display: flex; align-items: center; justify-content: center;"
                >
                  <div className="flipTimemodulesboxes">
                    <div className="flipTimebox">
                      <div className="flipclock1"></div>
                      <div className="flipclock1message"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
        <div id="app"></div>

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
