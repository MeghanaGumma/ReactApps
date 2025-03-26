import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemedButton from "./components/ThemedButton";
import Timer from "./components/Timer";
import UserPreferences from "./components/UserPreferences";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>React Advanced Hooks</h1>
        <Timer />
        <ThemedButton />
        <UserPreferences />
      </div>
    </ThemeProvider>
  );
}

export default App;
