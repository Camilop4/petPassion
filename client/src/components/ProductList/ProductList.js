/*import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import api from '../../services/api'; // Importa tu cliente de API
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/producto'); // Ajusta la ruta de tu API
        setProducts(response.data.productos); // Ajusta cómo accedes a los datos
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar los productos: {error}</p>;

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}*/

import React from 'react';
import ProductCard from './ProductCard';
import useFetch from '../../hooks/useFetch'; // Importa el hook
import "./ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch('/producto'); // Usa el hook

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar los productos: {error}</p>;

  const products = data ? data.productos : []; // Asegúrate de acceder a los datos correctamente
  console.log("Datos de productos:", products); // <--- Agrega este console.log

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}



export default ProductList;