import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../image/logo.svg';
import './HeroSection.css'; // Importa estilos específicos si los tienes

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>¡Descubre la Pasión por tus Mascotas!</h1>
        <p>Encuentra todo lo que necesitas para el bienestar y la felicidad de tus adorables compañeros.</p>
        <Link to="/products" className="hero-button">Ver Productos</Link>
      </div>
      <div className="hero-image">
        {/* Aquí podrías incluir una imagen o un componente de imagen */}
        <img src={companyLogo} alt='Mascota feliz'></img>
      </div>
    </section>
  );
}

export default HeroSection;