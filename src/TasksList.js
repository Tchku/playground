import { Input, Button, Popover, TextInput, Modal, Stack } from "@mantine/core";
// import { IconHeart } from "@tabler/icons-react";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import TaskListItem from "./TaskListItem";

function TasksList() {
  const [opened, { open, close }] = useDisclosure(false);
  // const [boolean reikšmė, {objektas su open ir close properčiais, iš pavadinimų galima nuspėti, kad bus funkcijos}] <- [laužtinis skliaustas indikuoja masyvą su dviem elementais]
  // const modalHandler = useDisclosure(false); <- kitas būdas kaip parašyti 8 eilutę
  // useDisclosure(false) užnaudija hooką ir uždefinina modalo state

  const [popoverOpened, { open: popoverOpen, close: popoverClose }] =
    useDisclosure(false);
  const [tasks, setTasks] = useState([]);
  // [state, funkcija, kuri leidžia nustatyti state]
  const [inputValue, setInputValue] = useState("");
  const [newInput, setNewInputValue] = useState(inputValue);

  const handleOnInputValueChange = (event) => {
    console.log(event);
    setInputValue(event.target.value);
  };

  const handleCreateClick = (event) => {
    console.log(event);
    console.log(event.target);
    if (inputValue === "") {
      alert("Please insert a task!");
      return;
    }
    setTasks([...tasks, inputValue]);
    // const taskList3 = [...taskList1];
    setInputValue("");
    popoverClose();
  };

  const handleTaskDeletion = (index) => {
    const newTaskList = [...tasks];
    newTaskList.splice(index, 1);
    setTasks(newTaskList);
  };

  const handleEditClick = (index) => {
    setNewInputValue(inputValue);
  };

  console.log(tasks);

  return (
    <div>
      <Stack>
        {tasks.map((task, index) => (
          <TaskListItem
            taskTitle={task}
            onDeleteClick={() => handleTaskDeletion(index)}
            onEditClick={() => handleEditClick()}
          />
        ))}
      </Stack>
      <Popover
        opened={popoverOpened}
        onClose={popoverClose}
        width={300}
        trapFocus
        position="bottom"
        withArrow
        shadow="md"
        color="grey"
      >
        <Popover.Target>
          <Button onClick={popoverOpen}>Add task</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <TextInput
            label="Name"
            size="xs"
            placeholder="Enter your task"
            value={inputValue}
            onChange={handleOnInputValueChange}
          />
          <p></p>
          <Button
            onClick={handleCreateClick}
            variant="outline"
            color="red" // kodėl spalva nepasikeičia į baltą? nei "white" įrašius, nei rgb - SOLVED
            size="xs"
            radius="md"
          >
            Create
          </Button>
          <Button onClick={popoverClose}>Close</Button>
        </Popover.Dropdown>
      </Popover>
      <p></p>
      <div>
        <Modal opened={opened} onClose={close} title="Enter task">
          {/* <Modal opened={modalHandler[0]} onClose={modalHandler[1].close} title="Enter task"></Modal> */}
          <TextInput
            label="Name"
            size="xs"
            placeholder="Enter your task"
            value={inputValue}
            onChange={handleOnInputValueChange}
          />
          <p></p>
          <Button
            onClick={handleCreateClick}
            variant="outline"
            color="red" // kodėl spalva nepasikeičia į baltą? nei "white" įrašius, nei rgb - SOLVED
            size="xs"
            radius="md"
          >
            Create
          </Button>
        </Modal>
        <Button color="teal" onClick={open}>
          Add task
        </Button>
      </div>
    </div>
  );
}

export default TasksList;

//<Button leftSection={<IconHeart size={14} />} variant="default">Add task</Button>
