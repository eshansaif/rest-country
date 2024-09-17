import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(100);
  const handleIncrement = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <h1>{count}</h1>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>
    </>
  );
}
