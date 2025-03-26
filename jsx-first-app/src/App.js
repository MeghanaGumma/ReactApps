import './App.css';
import React from "react";

function App() {
  const name = "Meghana Gumma";
  const welcomeMessage = <h1>Welcome, {name}!</h1>;

  return (
    <div>
      {welcomeMessage}
      <p>My first react app using JSX</p>
      <p>Simple React application</p>
    </div>
  );
}

export default App;
