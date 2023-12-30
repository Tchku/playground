import React, { useEffect } from "react";
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
    autoStart: false,
  });

  useEffect(() => {
    restartTimer(false);
  }, [timerValue]);

  const restartTimer = (autoStart) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timerValue);
    restart(time, autoStart);
  };

  // const time = new Date();
  // time.setSeconds(10);

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
      <button onClick={restartTimer}>Restart</button>
    </div>
  );
}

export default Timer;
