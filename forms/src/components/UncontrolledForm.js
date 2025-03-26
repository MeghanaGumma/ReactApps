import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uncontrolled Form Submitted:", nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Uncontrolled Form</h2>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
