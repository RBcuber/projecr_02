import styles from "./ChildA.module.css";

interface Props {
  kindness: number;
  setKindness: React.Dispatch<React.SetStateAction<number>>;
}
export default function ChildA(props: Props) {
  const { kindness, setKindness } = props;
  function handleBeKinder() {
    setKindness((prev) => prev + 1);
  }
  return (
    <div className={styles.container}>
      ChildA
      <p>Kindness: {kindness}</p>
      <button type="button" onClick={handleBeKinder}>
        Be gentle
      </button>
    </div>
  );
}
