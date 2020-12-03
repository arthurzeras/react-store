export default function Product({ product }) {
  return (
    <div className="product">
      <img src={product.picture} alt={product.name} />
    </div>
  );
}
