import { useState } from "react";
import styles from "./GenderByName.module.css";
import type GenderInfo from "../../types/GenderInfo";

export default function GenderByName() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [genderInfo, setGenderInfo] = useState<GenderInfo | undefined>(
    undefined
  );
  function handleInfo() {
    setIsSubmitted(true);
    fetchInfo();
  }

  async function fetchInfo() {
    const res = await fetch(
      `https://api.genderapi.io/api/?key=68f6bdbefd15e0a6e9e04b86&name=${name}`
    );
    const data = await res.json();
    setGenderInfo(data);
    
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gender by Name</h2>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Введите имя..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setIsSubmitted(false);
          }}
          className={styles.input}
        />
        <button
          type="button"
          onClick={handleInfo}
          className={styles.button}
          disabled={!name.trim()}
        >
          Получить данные
        </button>
      </div>

      {isSubmitted ? (
        <ul className={styles.list}>
          <li>Имя: {name}</li>
          <li>
            Пол:{" "}
            {genderInfo?.gender === "male"
              ? "Мужской"
              : genderInfo?.gender === "female"
              ? "Женский"
              : "неизвестно"}
          </li>
          <li>Страна: {genderInfo?.country}</li>
          <li>Вероятность: {genderInfo?.probability}%</li>
          <li>Остаток запросов: {genderInfo?.remaining_credits}</li>
        </ul>
      ) : null}
    </div>
  );
}
