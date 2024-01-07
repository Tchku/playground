import "./App.css";
import { Button, Popover, TextInput, Stack, Group, Text } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import TaskListItem from "./TaskListItem";
import { IconChecklist } from "@tabler/icons-react";

function TasksList() {
  const [popoverOpened, { open: popoverOpen, close: popoverClose }] =
    useDisclosure(false);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleOnInputValueChange = (event) => {
    console.log(event);
    if (event.target.value === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setInputValue(event.target.value);
  };

  const handleCreateClick = () => {
    if (inputValue === "") {
      setIsError(true);
      return;
    }
    setTasks([...tasks, inputValue]);
    setInputValue("");
    popoverClose();
  };

  const handleTaskDeletion = (index) => {
    const newTaskList = [...tasks];
    newTaskList.splice(index, 1);
    setTasks(newTaskList);
  };

  const handleTaskEdit = (index, value) => {
    const newTaskList = [...tasks];
    newTaskList[index] = value;
    setTasks(newTaskList);
  };

  const handlePopoverClose = () => {
    popoverClose();
    setInputValue("");
    setIsError(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCreateClick();
    }
  };

  return (
    <div>
      <Stack>
        <div>
          {tasks.map((task, index) => (
            <TaskListItem
              taskTitle={task}
              onDeleteClick={() => handleTaskDeletion(index)}
              onSaveClick={(value) => handleTaskEdit(index, value)}
            />
          ))}
        </div>
      </Stack>
      <Popover
        opened={popoverOpened}
        onClose={handlePopoverClose}
        width={300}
        trapFocus
        position="bottom"
        withArrow
        shadow="md"
        color="grey"
      >
        <Popover.Target>
          <Button variant="default" onClick={popoverOpen} disabled={isError}>
            Add task
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text fz="xs" ta="center" c="black" fw={500}>
            What are you working on?
          </Text>
          <p></p>
          <TextInput
            size="xs"
            placeholder="Enter your task"
            value={inputValue}
            icon={<IconChecklist />}
            error={isError ? " " : undefined}
            onChange={handleOnInputValueChange}
            onKeyDown={handleKeyDown}
          />
          {isError && (
            <Text fz="xs" color="red" ta="left">
              Please insert your task name
            </Text>
          )}
          <p></p>
          <Group position="center">
            <Button
              onClick={handleCreateClick}
              compact
              variant="subtle"
              color="dark"
              size="xs"
              radius="md"
              disabled={isError}
            >
              Create
            </Button>
            <Button
              onClick={handlePopoverClose}
              compact
              variant="subtle"
              color="dark"
              size="xs"
              radius="md"
            >
              Close
            </Button>
          </Group>
        </Popover.Dropdown>
      </Popover>
      <p></p>
    </div>
  );
}

export default TasksList;
