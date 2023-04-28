import React, { useState } from "react";
import { TaskItem } from "./components/TaskListItem";

import "./styles.css";
import { AddTaskButton } from "./components/AddTaskButton";
import { AddTaskModal } from "./components/AddTaskModal";
import { TaskList } from "./components/TaskList";

export default function App() {
  const [addTaskClicked, setAddTaskClicked] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (taskItem: TaskItem) => {};

  const toggleModal = () => {
    setAddTaskClicked(true);
  };

  const onSubmit = (taskItem: TaskItem) => {
    setAddTaskClicked(false);
    setSubmit(true);
    setTasks([...tasks, taskItem]);
  };

  const closeModal = () => {
    setAddTaskClicked(false);
  };

  return (
    <div className="App">
      Task Tracker
      {!addTaskClicked && <AddTaskButton toggleModal={toggleModal} />}
      {addTaskClicked && !submit && (
        <AddTaskModal onSubmit={onSubmit} closeModal={closeModal} />
      )}
      {tasks.length > 0 && <TaskList tasks={tasks} />}
      
    </div>
  );
}