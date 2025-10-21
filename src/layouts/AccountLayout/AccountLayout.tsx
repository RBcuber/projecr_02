import { NavLink, Outlet } from "react-router-dom";
import styles from "./AccountLayout.module.css";
import { ROUTES } from "../../constants/routes";

export default function AccountLayout() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Кабинет</h2>

      <nav className={styles.nav}>
        <NavLink to={ROUTES.ACCOUNT} className={styles.link}>
          Главная
        </NavLink>
        <NavLink to={ROUTES.SETTINGS_ACCOUNT} className={styles.link}>
          Настройки
        </NavLink>
        <NavLink to={ROUTES.INFO_USERS} className={styles.link}>
          Инфо
        </NavLink>
      </nav>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}