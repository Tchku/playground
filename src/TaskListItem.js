import React, { useState } from "react";
import { Button, Group, Input, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const TaskListItem = ({ taskTitle, onDeleteClick, onSaveClick }) => {
  const [modalOpened, { open, close }] = useDisclosure(false);
  const [editVisible, setEditVisible] = useState(false);
  const [newInputValue, setNewInputValue] = useState("");

  const handleEditClick = () => {
    setEditVisible(true);
    setNewInputValue(taskTitle);
  };

  const handleSaveClick = () => {
    onSaveClick(newInputValue);
    setEditVisible(false);
  };

  const handleNewValueChange = (event) => {
    console.log(event);
    setNewInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSaveClick();
    }
  };

  const handleTaskDeletion = () => {
    onDeleteClick();
    close();
  };

  return (
    <>
      <Group position="apart">
        {editVisible ? (
          <Input
            value={newInputValue}
            onChange={handleNewValueChange}
            onKeyDown={handleKeyDown}
          ></Input>
        ) : (
          <p>{taskTitle}</p>
        )}
        <Group>
          {editVisible ? (
            <Button
              variant="subtle"
              color="gray"
              radius="xs"
              compact
              onClick={handleSaveClick}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="subtle"
              color="gray"
              radius="xs"
              compact
              onClick={handleEditClick}
            >
              Edit
            </Button>
          )}
          <Button
            variant="subtle"
            color="gray"
            radius="xs"
            compact
            onClick={open}
          >
            Delete
          </Button>
        </Group>
      </Group>
      <Modal
        opened={modalOpened}
        onClose={close}
        title="Are you sure you want to delete?"
        centered
      >
        {/* <Modal opened={modalHandler[0]} onClose={modalHandler[1].close} title="Enter task"></Modal> */}

        <p></p>
        <Group position="center">
          <Button
            onClick={handleTaskDeletion}
            variant="outline"
            color="red"
            size="xs"
            radius="md"
          >
            Delete
          </Button>
          <Button
            onClick={close}
            variant="outline"
            color="gray"
            size="xs"
            radius="md"
          >
            Close
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default TaskListItem;

/*
1. pasidaryti 'Are you sure you want to delete?' modalą
2. pasidaryti 'Edit mygtuką' - edit mygtukas pakeičia stringą į inputą. jeigu esc paspaudi - tai viskas grįžta į savo vėžias. Jeigu editini ir spaudi enter, tai pakeistas inputas išsisaugotų
3. pasidaryti "Enter" klavišo funkcionalumą, kai paspaudi "Create"
*/
