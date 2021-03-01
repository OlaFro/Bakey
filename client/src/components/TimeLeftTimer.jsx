import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDown = () => {
    // time information should come from the server

    const finish = new Date();
    finish.setHours(24, 0, 0, 0);
    //next midnight
    const now = new Date();

    const diff = finish - now;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hoursLeft = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;
    const secondsLeft = seconds % 60;
    setTimeLeft({
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      countDown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {" "}
      {`${timeLeft.hours}`}h {`${timeLeft.minutes}`}min
    </div>
  );
}
