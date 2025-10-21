import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        <NavLink to={ROUTES.RANDOM_JOKE}>Random Joke</NavLink>
        <NavLink to={ROUTES.SPACE_MISSION}>Space Mission</NavLink>
        <NavLink to={ROUTES.GENDER_REVEAL}>Gender Reveal</NavLink>
        <NavLink to={ROUTES.COHORT_68}>Cohort 68</NavLink>
        <NavLink to={ROUTES.ABOUT}>About</NavLink>
        <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
        <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>


      </nav>
    </header>
  );
}
