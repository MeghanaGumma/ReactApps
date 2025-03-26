import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>{count%2===0 ? "Count is even" : "Count is odd"}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
