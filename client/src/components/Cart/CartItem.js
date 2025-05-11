import React from 'react';
import './CartItem.css'; // Importa estilos específicos si los tienes

function CartItem({ item, onQuantityChange, onRemove }) {
  const { id, nombre, precio, imagen, cantidad } = item;

  const handleQuantityIncrement = () => {
    onQuantityChange(id, cantidad + 1);
  };

  const handleQuantityDecrement = () => {
    if (cantidad > 1) {
      onQuantityChange(id, cantidad - 1);
    }
  };

  const handleRemoveItem = () => {
    onRemove(id);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        {imagen ? (
          <img src={imagen} alt={nombre} />
        ) : (
          <div className="placeholder-image">Imagen no disponible</div>
        )}
      </div>
      <div className="item-details">
        <h3 className="item-name">{nombre}</h3>
        <p className="item-price">${precio}</p>
      </div>
      <div className="item-quantity">
        <button onClick={handleQuantityDecrement}>-</button>
        <span className="quantity-value">{cantidad}</span>
        <button onClick={handleQuantityIncrement}>+</button>
      </div>
      <div className="item-total">
        ${(precio * cantidad).toFixed(2)}
      </div>
      <button className="remove-button" onClick={handleRemoveItem}>
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;