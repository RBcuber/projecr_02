import { useEffect, useState } from "react";
import type UserInfo from "../../types/UserInfo";

export default function AccountHome() {
  const [user, setUser] = useState<UserInfo | undefined>(undefined);
  async function fetchProfile() {
    const token = localStorage.getItem("access_token");

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const currentUser = await res.json();
    setUser(currentUser);
  }
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      Главная страничка нашего кабинета
      <p>{user?.email}</p>
    </div>
  );
}
