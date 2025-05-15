import React, { createContext, useState, useEffect, useContext } from 'react';

// Crea el contexto del carrito
export const CartContext = createContext();

// Crea un hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);

// Crea el proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  // Estado para almacenar los items en el carrito
  const [cartItems, setCartItems] = useState(() => {
    // Intenta cargar el carrito desde el almacenamiento local al iniciar
    const localCart = localStorage.getItem('cartItems');
    return localCart ? JSON.parse(localCart) : [];
  });

  // Efecto para guardar el carrito en el almacenamiento local cada vez que cambia
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un item al carrito
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Si el item ya existe, aumenta la cantidad
      const updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Si el item no existe, agrégalo con cantidad 1
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }
  };

  // Función para remover un item del carrito
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Función para actualizar la cantidad de un item en el carrito
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, cantidad: parseInt(newQuantity, 10) } : item
    );
    setCartItems(updatedCart);
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Valores que serán proporcionados a los componentes consumidores
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems: cartItems.reduce((sum, item) => sum + item.cantidad, 0),
    totalPrice: cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0).toFixed(2),
  };

  // Renderiza el proveedor del contexto
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;