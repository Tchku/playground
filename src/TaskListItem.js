import React, { useState } from "react";
import {
  Button,
  Group,
  TextInput,
  Text,
  Modal,
  FocusTrap,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const TaskListItem = ({ taskTitle, onDeleteClick, onSaveClick }) => {
  const [modalOpened, { open, close }] = useDisclosure(false);
  const [editVisible, setEditVisible] = useState(false);
  const [newInputValue, setNewInputValue] = useState("");
  const [isNewValueError, setNewValueError] = useState(false);
  const [active, { toggle }] = useDisclosure(false);

  const handleNewValueChange = (event) => {
    console.log(event);
    if (event.target.value === "") {
      setNewValueError(true);
    } else {
      setNewValueError(false);
    }
    setNewInputValue(event.target.value);
  };

  const handleEditClick = () => {
    setEditVisible(true);
    setNewInputValue(taskTitle);
    toggle(true);
  };

  const handleSaveClick = () => {
    onSaveClick(newInputValue);
    setEditVisible(false);
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
      <FocusTrap active={active}></FocusTrap>
      {isNewValueError && (
        <Text fz="xs" color="white" ta="left">
          Please insert your task name
        </Text>
      )}

      <Group position="apart">
        {editVisible ? (
          <TextInput
            size="md"
            value={newInputValue}
            onChange={handleNewValueChange}
            onKeyDown={handleKeyDown}
            error={isNewValueError ? " " : undefined}
            data-autofocus
          ></TextInput>
        ) : (
          <p>
            <Text fz="xl">{taskTitle}</Text>
          </p>
        )}
        <Group>
          {editVisible ? (
            <Button
              variant="subtle"
              color="gray.0"
              radius="xs"
              compact
              onClick={handleSaveClick}
              disabled={isNewValueError}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="subtle"
              color="gray.0"
              radius="xs"
              compact
              onClick={handleEditClick}
            >
              Edit
            </Button>
          )}
          <Button
            variant="subtle"
            color="gray.0"
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
        <p></p>
        <Group position="center">
          <Button
            onClick={handleTaskDeletion}
            variant="subtle"
            color="red"
            size="xs"
            radius="md"
          >
            Delete
          </Button>
          <Button
            onClick={close}
            variant="subtle"
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
