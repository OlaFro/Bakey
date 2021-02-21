import React, { useEffect, useState } from "react";

export default function Timer() {
  // test version of the code, need to consult it with Fahim
  const finish = new Date();
  finish.setHours(24, 0, 0, 0);
  const now = new Date();

  const diff = finish - now;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hoursLeft = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  const secondsLeft = seconds % 60;

  const [newSeconds, setNewSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        {" "}
        {`${hoursLeft}`}h {`${minutesLeft}`}min
      </div>
    </>
  );
}
