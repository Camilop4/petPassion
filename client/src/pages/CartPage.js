import React, { useContext, useState } from 'react'; // <--- Asegúrate de tener useState aquí
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/Cart/CartItem';
import './CartPage.css';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  // const [cartItems, setCartItems] = useState([ // Comenta o elimina este estado local si estás usando el contexto
  //   { id: 1, nombre: 'Producto 1', precio: 25.99, imagen: '/images/producto1.jpg', cantidad: 2 },
  //   { id: 2, nombre: 'Producto 2', precio: 49.50, imagen: '/images/producto2.jpg', cantidad: 1 },
  // ]);

  // const updateQuantity = (itemId, newQuantity) => { // Comenta o elimina esta función si estás usando el contexto
  //   setCartItems(cartItems.map(item =>
  //     item.id === itemId ? { ...item, cantidad: newQuantity } : item
  //   ));
  // };

  // const removeItem = (itemId) => { // Comenta o elimina esta función si estás usando el contexto
  //   setCartItems(cartItems.filter(item => item.id !== itemId));
  // };

  return (
    <div className="cart-page">
      <h1>Tu Carrito de Compras</h1>
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
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-actions-bottom"> {/* Contenedor para los botones inferiores */}
          <button className="clear-cart-button" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <div className="checkout-area"> {/* Nuevo contenedor para Total e Ir a la Caja */}
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

export default CartPage;