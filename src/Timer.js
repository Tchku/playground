import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import "./Timer.css";
import { Button, Group } from "@mantine/core";

function Timer({ timerValue }) {
  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
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
      <Group position="center">
        <Button
          variant="subtle"
          color="dark"
          radius="xs"
          size="xs"
          compact
          onClick={start}
        >
          Start
        </Button>
        <Button
          variant="subtle"
          color="dark"
          radius="xs"
          size="xs"
          compact
          onClick={pause}
        >
          Pause
        </Button>
        <Button
          variant="subtle"
          color="dark"
          radius="xs"
          size="xs"
          compact
          onClick={resume}
        >
          Resume
        </Button>
        <Button
          variant="subtle"
          color="dark"
          radius="xs"
          size="xs"
          compact
          onClick={restartTimer}
        >
          Restart
        </Button>
      </Group>
    </div>
  );
}

export default Timer;
