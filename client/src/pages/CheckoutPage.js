import React, { useState } from 'react';
import ShippingForm from '../components/Checkout/ShippingForm';
import PaymentForm from '../components/Checkout/PaymentForm';
import './CheckoutPage.css'; // Importa estilos específicos si los tienes

function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [orderSummaryVisible, setOrderSummaryVisible] = useState(false); // Ejemplo de estado para mostrar resumen

  const handleShippingSubmit = (data) => {
    setShippingInfo(data);
    setOrderSummaryVisible(true); // Muestra el resumen después del envío (ejemplo)
  };

  const handlePaymentSubmit = (data) => {
    setPaymentInfo(data);
    // Aquí llamarías a tu API para procesar el pedido
    console.log('Información de envío:', shippingInfo);
    console.log('Información de pago:', data);
    alert('¡Pedido realizado con éxito!');
    // Podrías redirigir al usuario a una página de confirmación
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {!shippingInfo && (
        <div className="checkout-section">
          <h2>Información de Envío</h2>
          <ShippingForm onSubmit={handleShippingSubmit} />
        </div>
      )}

      {shippingInfo && !paymentInfo && (
        <div className="checkout-section">
          <h2>Información de Pago</h2>
          <PaymentForm onSubmit={handlePaymentSubmit} />
        </div>
      )}

      {shippingInfo && paymentInfo && (
        <div className="checkout-section order-summary">
          <h2>Resumen del Pedido</h2>
          {/* Aquí mostrarías un resumen de los artículos en el carrito,
              la información de envío y el total del pedido. */}
          <p>Información de Envío:</p>
          <ul>
            <li>Nombre: {shippingInfo.nombre}</li>
            <li>Dirección: {shippingInfo.direccion}</li>
            <li>Ciudad: {shippingInfo.ciudad}</li>
            <li>Código Postal: {shippingInfo.codigoPostal}</li>
            <li>País: {shippingInfo.pais}</li>
          </ul>
          <p>Total del Pedido: $XX.XX</p> {/* Reemplaza con el cálculo real */}
          <button onClick={() => alert('Procesando Pedido')}>Confirmar Pedido</button>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;