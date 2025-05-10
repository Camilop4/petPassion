import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css'; // Importa estilos específicos si los tienes

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2>¡Únete a la comunidad Pet Passion hoy mismo!</h2>
        <p>Descubre ofertas exclusivas y mantente al día con las últimas novedades para tus mascotas.</p>
        <Link to="/register" className="cta-button">Registrarse</Link>
        <Link to="/login" className="cta-button secondary">Iniciar Sesión</Link>
      </div>
      <div className="cta-image">
        {/* Aquí podrías incluir otra imagen */}
        <img src="/images/cta-pets.jpg" alt="Grupo de mascotas" />
      </div>
    </section>
  );
}

export default CallToAction;