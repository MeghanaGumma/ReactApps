import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="timer">
      <h2>Current Time: {time}</h2>
    </div>
  );
}

export default Timer;
