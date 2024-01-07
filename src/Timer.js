import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import "./Timer.css";
import { Group } from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

const ButtonComponent = ({ startAction, buttonName }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 50);
    startAction();
  };

  return (
    <button
      onClick={handleClick}
      className={`timerButton ${isClicked ? "clicked" : ""}`}
    >
      {buttonName}
    </button>
  );
};

function Timer({ timerValue }) {
  const { seconds, minutes, hours, start, pause, resume, restart } = useTimer({
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

  return (
    <div className="Timer">
      <div className="timerNumbers">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p></p>
      <Group position="center">
        <ButtonComponent buttonName="Start" startAction={() => start()} />
        <ButtonComponent buttonName="Pause" startAction={() => pause()} />
        <ButtonComponent buttonName="Resume" startAction={() => resume()} />
        <ButtonComponent
          buttonName="Restart"
          startAction={() => restartTimer()}
        />
      </Group>
    </div>
  );
}

export default Timer;
