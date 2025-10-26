import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
export default function useProducts() {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products. Status: " + res.status);
      }
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, message };
}
