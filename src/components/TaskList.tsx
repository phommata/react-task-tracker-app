import React from "react";
import { TaskListItem, TaskItem } from "./TaskListItem";

type Props = {
  tasks: TaskItem[];
};

export const TaskList: React.FC<Props> = ({ tasks }) => (
  <>
    {tasks.length === 0 ? ('No tasks have been added yet.') : (
      tasks.map((task, index) => (
        <TaskListItem key={index} title={task.title} date={task.date}/>
      ))
    )}
  </>
);
