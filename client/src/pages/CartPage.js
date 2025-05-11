/*import React, { useContext, useState } from 'react'; // Si usas Context API para el carrito
import ShoppingCart from '../components/Cart/ShoppingCart';
import './CartPage.css'; // Importa estilos específicos si los tienes

// Ejemplo de Context API para el carrito (tendrías que implementarlo en otro archivo)
// import { CartContext } from '../context/CartContext';

function CartPage() {
  // Si usas Context API:
  // const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  // Si usas props pasadas desde un componente padre (ej: App.js):
  // const { cartItems, updateQuantity, removeItem } = props;

  // Para este ejemplo básico, usaré datos de carrito simulados:
  const [cartItems, setCartItems] = useState([
    { id: 1, nombre: 'Producto 1', precio: 25.99, imagen: '/images/producto1.jpg', cantidad: 2 },
    { id: 2, nombre: 'Producto 2', precio: 49.50, imagen: '/images/producto2.jpg', cantidad: 1 },
  ]);

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, cantidad: newQuantity } : item
    ));
    // Aquí podrías llamar a una función para actualizar el carrito en el estado global
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
    // Aquí podrías llamar a una función para eliminar el item del carrito en el estado global
  };

  return (
    <div className="cart-page">
      <h1>Tu Carrito de Compras</h1>
      <ShoppingCart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      {cartItems.length > 0 && (
        <div className="checkout-button-container">
          <button className="checkout-button">Ir al Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;*/

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

export default CartPage;