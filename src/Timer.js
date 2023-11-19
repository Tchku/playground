import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";

const Timer = ({ timerValue }) => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");
  const [running, setRunning] = useState(false);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const runTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const startTimer = (deadTime) => {
    const id = setInterval(() => {
      runTimer(deadTime);
    }, 1000);
    Ref.current = id;
  };

  const stopTimer = () => {
    if (Ref.current) clearInterval(Ref.current);
  };

  const clearTimer = (deadTime) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("Timer starting...");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    stopTimer();
    startTimer(deadTime);
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + timerValue);

    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only

  // useEffect(() => {
  //   clearTimer(getDeadTime());
  // }, [timerValue]);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const toggleTimer = () => {
    if (running) {
      clearInterval(Ref.current);
    } else {
      const id = setInterval(() => {
        runTimer(getDeadTime());
      }, 1000);
      Ref.current = id;
    }

    setRunning(!running); // Toggle the running state
  };
  return (
    <div className="Timer">
      <div className="timerNumbers">{timer}</div>
      <button onClick={toggleTimer}>{running ? "Stop" : "Start"}</button>
      <button onClick={onClickReset}>Reset</button>
      <button onClick={() => clearTimer(getDeadTime())}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export const myRandomVariable = 10;
export default Timer;
