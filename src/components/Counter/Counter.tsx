import { useCounter } from "../../hooks/useCounter";
import s from "./Counter.module.css";

export default function Counter() {
  const { count, setCount } = useCounter();

  return (
    <div className={s.counterBox}>
      <h2 className={s.title}>Counter</h2>

      <div className={s.display}>
        <button
          className={s.btn}
          onClick={() => setCount(count - 1)}
          aria-label="Decrease"
        >
          –
        </button>

        <span className={s.value}>{count}</span>

        <button
          className={s.btn}
          onClick={() => setCount(count + 1)}
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );
}