import logo from "./logo.svg";
import "./App.css";
import { Button, Group, Container, Divider } from "@mantine/core";
import Timer from "./Timer";
import { useState } from "react";

const timerTypes = {
  work: "work",
  shortBreak: "shortBreak",
  longBreak: "longBreak",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Pomodoro
        <p></p>
        <p></p>
        <p></p>
        <div>
          <Container>
            <Group gap="xs">
              <Button variant="filled" color="red" size="md" radius="md">
                Work
              </Button>
              <Button variant="filled" color="yellow" size="md" radius="md">
                Long Break
              </Button>
              <Button variant="filled" color="green" size="md" radius="md">
                Short Break
              </Button>
            </Group>
            <Divider my="sm" />
            <Timer />
          </Container>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
