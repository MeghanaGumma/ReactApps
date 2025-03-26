import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>React Forms Example</h1>
      <RegistrationForm />
      <ControlledForm />
      <UncontrolledForm />
    </div>
  );
}

export default App;
