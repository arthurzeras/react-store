import './products.css';
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
      <h1 className="products__title">Produtos</h1>

      <section className="products__list">
        {products.map((product) => (
          <div className="products__list--item" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </section>
    </div>
  );
}
