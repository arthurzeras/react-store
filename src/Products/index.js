import './app.css';
import http from '../http';
import { useEffect, useState } from 'react';
import Product from '../components/Product';

export default function Products() {
  const [products, setProducts] = useState([]);

  const _getProducts = async () => {
    try {
      const { data } = await http.get('products');
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    _getProducts();
  }, []);

  return (
    <div className="products">
      <h1>Produtos</h1>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
