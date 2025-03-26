import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled Form Submitted:", name);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Controlled Form</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
