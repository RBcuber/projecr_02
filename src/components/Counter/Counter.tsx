import { useState } from "react";

export default function Counter() {
  const [secret] = useState(Math.floor(Math.random() * 21) - 10);
  const [count, setCount] = useState(0);
  function handlePlus() {
    setCount((prev) => prev + 1);
  }
  function handleMinus() {
    setCount((prev) => prev - 1);
  }
  function handleClear() {
    setCount(0);
  }

  return (
    <div>
      Counter: {count}
      <button type="button" onClick={handlePlus}>
        +
      </button>
      <button type="button" onClick={handleMinus}>
        -
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
      <p> {count === secret ? "Ураааааааа" : ""}</p>
    </div>
  );
}
