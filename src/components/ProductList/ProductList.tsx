import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [products, setProduct] = useState<Product[]>([]);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setProduct(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      ProductsList
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title}
            <img src={p.images[0]} alt={p.title}  width={"200px"}/>
            <Link to={`/products/${p.id}`}>To Product</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
