import React, { useState } from "react";

const DigitalClock = () => {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  const updateTime = () => {
    currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h2>Digital Clock</h2>
      <h2>{time}</h2>
    </>
  );
};

export default DigitalClock;
