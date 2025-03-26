import React from "react";
import Greeting from "./components/Greeting";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const tasks = ["Complete React assignment", "Review JavaScript", "Read about UI/UX"];

  return (
    <div className="app">
      <h1>React Assessment</h1>

      {/* Task 1: Greeting Components */}
      <Greeting name="Meghana" />
      <Greeting />

      {/* Task 2: Prop Drilling */}
      <TaskList tasks={tasks} />

      {/* Task 4 & 5: Counter Component */}
      <Counter />
    </div>
  );
}

export default App;
