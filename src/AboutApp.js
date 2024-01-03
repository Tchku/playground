import "./App.css";
import { useState } from "react";
import { Button as MantineButton, Group, Divider, Text } from "@mantine/core";
import {
  IconCoffee,
  IconRotateRectangle,
  IconFileDescription,
} from "@tabler/icons-react";
import styled from "@emotion/styled";
import AppHeader from "./AppHeader";

const Button = styled(MantineButton)`
  &:hover {
    color: dark;
    background-color: transparent;
  }
`;

const timerTypes = {
  work: "work",
  shortBreak: "shortBreak",
  longBreak: "longBreak",
};

const timerContainerClassNames = {
  [timerTypes.work]: "Timer-container-work",
  [timerTypes.shortBreak]: "Timer-container-shortBreak",
  [timerTypes.longBreak]: "Timer-container-longBreak",
};

export default function AboutApp() {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <div className={`App-body-work`}>
        <div className={"Timer-container-work"}>
          <div>
            <Group position="center" gap="m">
              <Button
                compact
                variant="subtle"
                color="dark"
                size="md"
                radius="md"
              >
                Work
              </Button>
              <Button
                compact
                variant="subtle"
                color="dark"
                size="l"
                radius="md"
              >
                Short Break
              </Button>
              <Button
                compact
                variant="subtle"
                color="dark"
                size="md"
                radius="md"
              >
                Long Break
              </Button>
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
}
