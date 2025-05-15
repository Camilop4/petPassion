import React from 'react';
import './ProductInfo.css'; // Importa estilos específicos si los tienes
import { useCart } from '../../contexts/CartContext';

function ProductInfo({ product }) {
  const { nombre, precio, descripcion, caracteristicas } = product;
  const { addToCart } = useCart(); // Obtén la función addToCart

  return (
    <div className="product-info">
      <h2>{nombre}</h2>
      <p className="price">${precio}</p>
      {descripcion && <div className="long-description">
        <h3>Descripción</h3>
        <p>{descripcion}</p>
      </div>}
      {caracteristicas && caracteristicas.length > 0 && (
        <div className="features">
          <h3>Características</h3>
          <ul>
            {caracteristicas.map((caracteristica, index) => (
              <li key={index}>{caracteristica}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="product-actions">
        <button onClick={() =>{
          addToCart(product);
          console.log(`Se ha agregado ${nombre} al carrito`)
        }}>
          Agregar al carrito
        </button>
        {/* Puedes agregar más acciones como "Añadir a la lista de deseos" */}
      </div>
    </div>
  );
}

export default ProductInfo;