import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type UserInfo from "../../types/UserInfo";
import styles from "./UserList.module.css"

export default function UserList() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const data = await res.json();
    setUsers(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>User List</h2>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.card}>
            <img src={user.avatar} alt={user.name} className={styles.avatar} />
            <h3>{user.name}</h3>
            <Link to={`/users-info/${user.id}`} className={styles.link}>
              Смотреть профиль
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}