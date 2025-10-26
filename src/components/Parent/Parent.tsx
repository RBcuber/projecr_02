import { useState } from "react";
import ChildA from "../ChildA/ChildA";
import ChildB from "../ChildB/ChildB";
import styles from "./Parent.module.css";
export default function Parent() {
  const [kindness, setKindness] = useState(0);
  return (
    <div className={styles.container}>
      Parent
      <p>Kindness: {kindness}</p>
      <ChildA kindness={kindness} setKindness={setKindness} />
      <ChildB kindness={kindness} setKindness={setKindness} />
    </div>
  );
}
