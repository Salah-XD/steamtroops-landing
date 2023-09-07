import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Prelaunch.css';

const Prelaunch = ({ timeTillDate, timeFormat }) => {
  const [days, setDays] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [seconds, setSeconds] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeTillDate, timeFormat]);

  const SVGCircle = ({ radius }) => (
    <svg className='countdown-svg'>
      <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
  );

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
  };

  const mapNumber = (number, in_min, in_max, out_min, out_max) => {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  };

  const daysRadius = mapNumber(days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  if (!seconds) {
    return null;
  }

  return (
    <div>
      <div className='countdown-wrapper'>
        {days && (
          <div className='countdown-item'>
            <SVGCircle radius={daysRadius} />
            {days}
            <span>days</span>
          </div>
        )}
        {hours && (
          <div className='countdown-item'>
            <SVGCircle radius={hoursRadius} />
            {hours}
            <span>hours</span>
          </div>
        )}
        {minutes && (
          <div className='countdown-item'>
            <SVGCircle radius={minutesRadius} />
            {minutes}
            <span>minutes</span>
          </div>
        )}
        {seconds && (
          <div className='countdown-item'>
            <SVGCircle radius={secondsRadius} />
            {seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prelaunch;
