import React from "react";
import { useTimer } from "react-timer-hook";
import "./Timer.css";

function Timer({ timerValue }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    timerValue,
    onExpire: () => console.warn("onExpire called"),
  });

  const time = new Date();
  time.setSeconds(10);

  return (
    <div className="Timer">
      <div className="timerNumbers">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Timer;
