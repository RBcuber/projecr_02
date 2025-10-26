import useProduct from "./useProduct";

export default function ProductPage() {
  const {product}= useProduct();
  return (
    <div>
      ProductPage
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <img src={product?.images[0]} alt={product?.title} width={"200px"} />
      <p>{product?.price}</p>
    </div>
  );
}
