import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function AccountHome() {
  const { user, setUser } = useAuth();
  async function fetchProfile(token: string) {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const currentUser = await res.json();
    setUser(currentUser);
  }
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchProfile(token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Главная страничка нашего кабинета
      <p>{user?.email}</p>
    </div>
  );
}
