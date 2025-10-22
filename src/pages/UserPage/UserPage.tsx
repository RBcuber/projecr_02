import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type UserInfo from "../../types/UserInfo";
import styles from "./UserPage.module.css"

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<UserInfo | undefined>(undefined);

  async function fetchProductById(id: string) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const data = await res.json();
    setUser(data);
  }
  useEffect(() => {
    fetchProductById(id || "");
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {user ? (
        <div className={styles.card}>
          <img src={user.avatar} alt={user.name} className={styles.avatar} />
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}