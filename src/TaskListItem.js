import React, { useState, useRef, useEffect } from "react";
import { Button, Group, Modal, TextInput } from "@mantine/core";

const TaskListItem = ({ taskTitle, onDeleteClick, onEditClick }) => {
  const [value, setValue] = useState(taskTitle);
  return (
    <Group position="apart">
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      ></TextInput>
      <Group>
        <Button
          variant="subtle"
          color="gray"
          radius="xs"
          compact
          onClick={onEditClick}
        >
          Edit
        </Button>
        <Button
          variant="subtle"
          color="gray"
          radius="xs"
          compact
          onClick={onDeleteClick}
        >
          Delete
        </Button>
      </Group>
    </Group>
  );
};

export default TaskListItem;

/*
1. pasidaryti 'Are you sure you want to delete?' modalą
2. pasidaryti 'Edit mygtuką' - edit mygtukas pakeičia stringą į inputą. jeigu esc paspaudi - tai viskas grįžta į savo vėžias. Jeigu editini ir spaudi enter, tai pakeistas inputas išsisaugotų
3. pasidaryti "Enter" klavišo funkcionalumą, kai paspaudi "Create"
*/
