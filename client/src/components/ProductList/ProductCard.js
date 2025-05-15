import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Importa estilos específicos si los tienes
import {useCart} from '../../contexts/CartContext';

function ProductCard({ product }) {
  // Asegúrate de que el objeto 'product' tenga las propiedades que necesitas
  const { id, nombre, precio, imagen, descripcionCorta } = product;
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product); // Llama a la función addToCart con el producto actual
    console.log(`Producto "${nombre}" agregado al carrito`);
    // Opcional: Puedes mostrar una notificación al usuario
  };

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="product-image">
          {imagen ? (
            <img src={imagen} alt={nombre} />
          ) : (
            <div className="placeholder-image">Imagen no disponible</div>
          )}
        </div>
        <div className="product-info">
          <h3>{nombre}</h3>
          <p className="price">${precio}</p>
          {descripcionCorta && <p className="description">{descripcionCorta}</p>}
        </div>
      </Link>
      <div className="product-actions">
        <button onClick={ handleAddToCart /*() => console.log(`Agregar ${nombre} al carrito`)*/}>
          Agregar al carrito
        </button>
        {/* Puedes agregar más acciones como "Ver detalles" si el Link no cubre todo */}
      </div>
    </div>
  );
}

export default ProductCard;