import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import s from "./Header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useCounter } from "../../hooks/useCounter";

const getClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? s.activeLink : s.link;

export default function Header() {
  const { user } = useAuth();
  const { count } = useCounter();

  return (
    <header className={s.header}>
      <div className={s.userInfo}>
        {user?.email && <p>{user.email}</p>}
        <p className={s.counter}>Счётчик: {count}</p>
      </div>

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
        <NavLink to={ROUTES.COUNTER} className={getClass}>
          Counter
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
        <NavLink to={ROUTES.SIGN_IN} className={getClass}>
          Sign In
        </NavLink>
        <NavLink to={ROUTES.CATEGORIES} className={getClass}>
          Categories
        </NavLink>
        <NavLink to={ROUTES.CREATE_CATEGORIES} className={getClass}>
          Create Categories
        </NavLink>
      </nav>
    </header>
  );
}