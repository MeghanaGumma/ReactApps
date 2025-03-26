import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <Task key={index} name={task} />
      ))}
    </div>
  );
}

export default TaskList;
