import "./App.css";
import { Button, Group, Divider } from "@mantine/core";
import Timer from "./Timer";
import Learning from "./Learning";
import { useState } from "react";
import TasksList from "./TasksList";

const timerTypes = {
  work: "work",
  shortBreak: "shortBreak",
  longBreak: "longBreak",
};

const motivationalNote = {
  [timerTypes.work]: "Time to focus!",
  [timerTypes.shortBreak]: "Time to rest",
  [timerTypes.longBreak]: "Some coffee maybe?",
};

const minutes = {
  [timerTypes.work]: 15 * 60,
  [timerTypes.shortBreak]: 10 * 60,
  [timerTypes.longBreak]: 20 * 60,
};

const timerContainerClassNames = {
  [timerTypes.work]: "Timer-container-work",
  [timerTypes.shortBreak]: "Timer-container-shortBreak",
  [timerTypes.longBreak]: "Timer-container-longBreak",
};

export default function App() {
  const [timerType, setTimerType] = useState(timerTypes.work);

  function workClick() {
    setTimerType(timerTypes.work);
  }

  function shortBreakClick() {
    setTimerType(timerTypes.shortBreak);
  }

  function longBreakClick() {
    setTimerType(timerTypes.longBreak);
  }

  Learning();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro</h1>
      </header>
      <div className={`App-body-${timerType}`}>
        <div>
          <Group gap="xs">
            <Button
              variant="filled"
              color="red"
              size="md"
              radius="md"
              onClick={workClick}
            >
              Work
            </Button>
            <Button
              variant="filled"
              color="blue"
              size="md"
              radius="md"
              onClick={shortBreakClick}
            >
              Short Break
            </Button>
            <Button
              variant="filled"
              color="green"
              size="md"
              radius="md"
              onClick={longBreakClick}
            >
              Long Break
            </Button>
          </Group>

          <Divider my="sm" />
          <div className={timerContainerClassNames[timerType]}>
            <Timer timerValue={minutes[timerType]} />

            {motivationalNote[timerType]}
          </div>
          <p>
            <div>
              <TasksList />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
