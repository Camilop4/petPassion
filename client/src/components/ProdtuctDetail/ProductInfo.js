import React from 'react';
import './ProductInfo.css'; // Importa estilos específicos si los tienes

function ProductInfo({ product }) {
  const { nombre, precio, descripcionLarga, caracteristicas } = product;

  return (
    <div className="product-info">
      <h2>{nombre}</h2>
      <p className="price">${precio}</p>
      {descripcionLarga && <div className="long-description">
        <h3>Descripción</h3>
        <p>{descripcionLarga}</p>
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
        <button onClick={() => console.log(`Agregar ${nombre} al carrito`)}>
          Agregar al carrito
        </button>
        {/* Puedes agregar más acciones como "Añadir a la lista de deseos" */}
      </div>
    </div>
  );
}

export default ProductInfo;