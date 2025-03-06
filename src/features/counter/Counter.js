import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          style={{ width: "50px", height: "50px" }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span style={{ width: "50px" }} />
        <button
          className={styles.button}
          style={{ width: "50px", height: "50px" }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
