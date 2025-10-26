import styles from "./ChildB.module.css";
interface Props {
  kindness: number;
  setKindness: React.Dispatch<React.SetStateAction<number>>;
}
export default function ChildB(props: Props) {
  const { kindness } = props;

  return (
    <div className={styles.container}>
      ChildB
      <p>Kindness: {kindness}</p>
    </div>
  );
}
