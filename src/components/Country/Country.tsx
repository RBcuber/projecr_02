import { useParams, useSearchParams } from "react-router-dom";

export default function Country() {
  const { id, slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  // /countries/12/usa?q=dollar&lang=eng
  const lang = searchParams.get("lang") || "";
  return (
    <div>
      Country №{id} Slug: {slug}
      Query q: {q}
      Lang: {lang}
      Search Lang
      <input
        type="text"
        value={lang}
        onChange={(e) =>
          setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("lang", e.target.value);
            return newParams;
          })
        }
      />
    </div>
  );
}

// /products
// /products/18
