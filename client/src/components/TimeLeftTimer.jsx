import React, { useEffect, useState } from "react";

export default function Timer(props) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDown = () => {
    // time information should come from the server

    const finish = new Date(props.pickUpDate.substr(0, 10));
    finish.setHours(0, 0, 0, 0);
    console.log(finish);
    //next midnight
    const now = new Date();

    const diff = finish - now;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const daysLeft = Math.floor(hours / 24);
    const minutesLeft = minutes % 60;
    const secondsLeft = seconds % 60;
    const hoursLeft = hours % 24;
    setTimeLeft({
      days: daysLeft,
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
      {timeLeft.days
        ? `${timeLeft.days}days ${timeLeft.hours}h`
        : `${timeLeft.hours}h ${timeLeft.minutes}min`}
    </div>
  );
}
