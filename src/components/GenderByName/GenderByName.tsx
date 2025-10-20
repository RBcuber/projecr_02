import { useState } from "react";
import styles from "./GenderByName.module.css";

export default function GenderByName() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [probability, setProbability] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleInfo() {
    setIsSubmitted(true);
    fetchInfo();
  }

  async function fetchInfo() {
    const res = await fetch(
      `https://api.genderapi.io/api/?key=68f6bdbefd15e0a6e9e04b86&name=${name}`
    );
    const data = await res.json();
    const {
      gender: apiGender,
      country: apiCountry,
      probability: apiProbability,
      remaining_credits: apiRemainingCredits,
    } = data;
    setGender(apiGender);
    setCountry(apiCountry);
    setProbability(apiProbability);
    setRemainingCredits(apiRemainingCredits);
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
            {gender === "male"
              ? "Мужской"
              : gender === "female"
              ? "Женский"
              : "неизвестно"}
          </li>
          <li>Страна: {country}</li>
          <li>Вероятность: {probability}%</li>
          <li>Остаток запросов: {remainingCredits}</li>
        </ul>
      ) : null}
    </div>
  );
}
