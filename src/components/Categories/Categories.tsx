import { useState, useEffect } from "react";
import type Category from "../../types/Category";
import styles from "./Categories.module.css"; // ✅ импорт стилей

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>

      <div className={styles.list}>
        {categories.map((c) => (
          <div className={styles.card}>
            <img src={c.image} alt={c.name} className={styles.image} />
            <h2 className={styles.name}>{c.name}</h2>
            <p className={styles.id}>ID: {c.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
