import "./App.css";
import { Button, Group, Divider } from "@mantine/core";
// import styled from "@emotion/styled";
import Timer from "./Timer";
import AppHeader from "./AppHeader";
import { useState } from "react";
import TasksList from "./TasksList";

// const Button = styled(MantineButton)`
//   &:hover {
//     color: red;
//     background-color: blue;
//   }
// `;

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

  return (
    <div className="App">
      <header>
        <AppHeader timerType={timerType} />
      </header>
      <div className={`App-body-${timerType}`}>
        <div className={timerContainerClassNames[timerType]}>
          <div>
            <Group position="center" gap="m">
              <Button
                compact
                variant="subtle"
                color="gray.0"
                size="md"
                radius="md"
                onClick={workClick}
              >
                Work
              </Button>
              <Button
                compact
                variant="subtle"
                color="dark"
                size="md"
                radius="md"
                onClick={shortBreakClick}
              >
                Short Break
              </Button>
              <Button
                compact
                variant="subtle"
                color="dark"
                size="md"
                radius="md"
                onClick={longBreakClick}
              >
                Long Break
              </Button>
            </Group>

            <Divider my="sm" />

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
