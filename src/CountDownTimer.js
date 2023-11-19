import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [minutes, setMinutes] = useState(0);
  const [secods, setSeconds] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (miliseconds > 0) {
          setMiliseconds((miliseconds) => miliseconds - 1);
        }
      });
    }

    return () => clearInterval(interval);
  }, [miliseconds]);

  return (
    <div>
      {" "}
      <h1 className="title"> This is a new timer </h1>
    </div>
  );
}
