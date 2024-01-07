import "./App.css";
import { useState } from "react";
import { Group, Divider, Text } from "@mantine/core";
import {
  IconCoffee,
  IconRotateRectangle,
  IconFileDescription,
} from "@tabler/icons-react";
import AppHeader from "./AppHeader";
import TasksList from "./TasksList";
import Timer from "./Timer";

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
  [timerTypes.work]: 25 * 60,
  [timerTypes.shortBreak]: 5 * 60,
  [timerTypes.longBreak]: 15 * 60,
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

  return (
    <div className="App">
      <header>
        <AppHeader timerType={timerType} />
      </header>
      <div className={`App-body-${timerType}`}>
        <div className={timerContainerClassNames[timerType]}>
          <div>
            <Group position="center" gap="m">
              <button className="Button" onClick={workClick}>
                Work
              </button>
              <button className="Button" onClick={shortBreakClick}>
                Short Break
              </button>
              <button className="Button" onClick={longBreakClick}>
                Long Break
              </button>
            </Group>
            <Divider my="sm" />
            <Timer timerValue={minutes[timerType]} />
            <p>
              <Group position="center">
                <Text ta="center" fz="xl" c="gray.0">
                  {motivationalNote[timerType]}
                </Text>
                {timerType === "work" && <IconFileDescription />}
                {timerType === "shortBreak" && <IconRotateRectangle />}
                {timerType === "longBreak" && <IconCoffee />}
              </Group>
            </p>
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
