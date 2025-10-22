import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import s from "./Header.module.css";

const getClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? s.activeLink : s.link;
export default function Header() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink to={ROUTES.HOME} className={getClass}>
          Home
        </NavLink>
        <NavLink to={ROUTES.RANDOM_JOKE} className={getClass}>
          Random Joke
        </NavLink>
        <NavLink to={ROUTES.SPACE_MISSION} className={getClass}>
          Space Mission
        </NavLink>
        <NavLink to={ROUTES.GENDER_REVEAL} className={getClass}>
          Gender Reveal
        </NavLink>
        <NavLink to={ROUTES.COHORT_68} className={getClass}>
          Cohort 68
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={getClass}>
          About
        </NavLink>
        <NavLink to={ROUTES.CONTACT} className={getClass}>
          Contact
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={getClass}>
          Account
        </NavLink>
         <NavLink to={ROUTES.PRODUCTS} className={getClass}>
          Products
        </NavLink>
        <NavLink to={ROUTES.USER_INFO} className={getClass}>
          User Info
        </NavLink>
      </nav>
    </header>
  );
}
