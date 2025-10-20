import { useState } from "react";
import styles from "./SpaceMissionForm.module.css"

export default function SpaceMissionForm() {
  const [nameAstronaut, setNameAstronaut] = useState<string>("");
  const [planet, setPlanet] = useState<string>("Mars");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function sendOnMission() {
    setIsSubmitted(true);
  }
  return (
    <div className = {styles.container}>
      <h2>Mission</h2>
      <label htmlFor="name-input">Astronaut name:</label>
      <input
        type="text"
        id="name-input"
        value={nameAstronaut}
        onChange={(e) => {
          setNameAstronaut(e.target.value);
          setIsSubmitted(false);
        }}
      />
      <label htmlFor="planet-input">Choose planet:</label>
      <select
        name="planet"
        id="planet-input"
        value={planet}
        onChange={(e) => {
          setPlanet(e.target.value);
          setIsSubmitted(false);
        }}
      >
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>
      <button type="button" onClick={sendOnMission}>
        Отправить на Миссию
      </button>
      {isSubmitted && nameAstronaut ? (
        <p>
          Astronaut {nameAstronaut} is headed to {planet}!
        </p>
      ) : isSubmitted && !nameAstronaut ? (
        <p>Please enter your name to begin your mission.</p>
      ) : null}
    </div>
  );
}
