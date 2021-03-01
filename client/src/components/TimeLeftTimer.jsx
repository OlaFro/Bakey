import React, { useEffect, useState } from "react";

export default function Timer(props) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDown = () => {
    let finish;
    console.log(props.pickUpDate);
    if (props.pickUpDate) {
      finish = new Date(props.pickUpDate.substr(0, 10));
    } else {
      finish = new Date();
    }

    console.log(finish);
    finish.setHours(0, 0, 0, 0);
    // pickUpDate
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
    if (props.pickUpDate) {
      const interval = setInterval(() => {
        countDown();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    countDown();
  }, [props.pickUpDate]);

  return (
    <div>
      {props.pickUpDate
        ? timeLeft.days
          ? `${timeLeft.days}d ${timeLeft.hours}h`
          : `${timeLeft.hours}h ${timeLeft.minutes}min`
        : "Days and Hours"}
    </div>
  );
}
