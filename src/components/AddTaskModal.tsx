import React, { useState } from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  onSubmit: (taskItem: TaskItem) => void;
  closeModal: () => void;
};

export const AddTaskModal: React.FC<Props> = ({ onSubmit, closeModal }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [disable, setDisable] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const taskTitleTmp = taskTitle;
    setTaskTitle("");
    closeModal();
    
    onSubmit({ title: taskTitleTmp, date: new Date().toDateString() });
  };

  const onChangeHandler = (taskTitleValue) => {
    if (taskTitleValue.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setTaskTitle(taskTitleValue);
  };

  const onCancelHandler = () => {
    setTaskTitle("");
    closeModal();
  };

  return (
    <form>
      <label for="taskTitle">Task Title</label>
      <input
        type="text"
        id="taskTitle"
        value={taskTitle}
        onChange={(event) => onChangeHandler(event.target.value)}
      />
      <button type="submit" disabled={disable} onClick={onSubmitHandler}>
        Submit
      </button>
      <button onClick={onCancelHandler}>Cancel</button>
    </form>
  );
};
