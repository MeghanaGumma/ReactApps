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
      <Greeting name="Meghana" />
      <Greeting />
      <TaskList tasks={tasks} />
      <Counter />
    </div>
  );
}

export default App;
