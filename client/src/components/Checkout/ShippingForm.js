import React, { useState } from 'react';
import './ShippingForm.css'; // Importa estilos específicos si los tienes

function ShippingForm({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [pais, setPais] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nombre, direccion, ciudad, codigoPostal, pais });
  };

  return (
    <div className="shipping-form">
      <h2>Información de Envío</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            id="ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input
            type="text"
            id="codigoPostal"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pais">País:</label>
          <input
            type="text"
            id="pais"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
        </div>
        <button type="submit">Continuar al Pago</button>
      </form>
    </div>
  );
}

export default ShippingForm;