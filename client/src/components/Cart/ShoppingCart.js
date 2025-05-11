import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import './ShoppingCart.css';

function ShoppingCart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
          <div className="cart-summary">
            <button className="clear-cart-button" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <div className="cart-total">
              <strong>Total:</strong> ${totalPrice}
            </div>
            <Link to="/checkout" className="checkout-button">
              Ir a la Caja
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;