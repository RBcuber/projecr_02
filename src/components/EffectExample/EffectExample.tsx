import { useEffect, useState } from "react";

export default function EffectExample() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }
  function generateRandom() {
    setRandom(Math.floor(Math.random() * 10));
  }
  useEffect(() => {
    console.log("Use effect 1");
  });
  useEffect(() => {
    console.log("Use effect 2");
  }, []);
  return (
    <div>
      <h2>EffectExample</h2>
      <p>Count: {count}</p>
      <p>Random: {random}</p>
      <button type="button" onClick={handleCount}>
        +1
      </button>
      <button type="button" onClick={generateRandom}>
        Random
      </button>
    </div>
  );
}

// Component lificycle - жизненный цикл
// 1. mount - рождения - устанивливается на экране первый раз - первый рендер
// 2. update - когда компонент изменяется
// 3. unmount - когда перестает отображться на экране
