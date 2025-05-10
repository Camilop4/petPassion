import React from 'react';
import './FeaturesSection.css'; // Importa estilos específicos si los tienes

function FeaturesSection() {
  const features = [
    {
      title: 'Amplia Variedad de Productos',
      description: 'Desde alimentos nutritivos hasta juguetes divertidos y accesorios esenciales.',
      icon: '🐾', // Puedes usar iconos o componentes de iconos
    },
    {
      title: 'Consejos de Expertos',
      description: 'Artículos y guías para ayudarte a cuidar mejor a tus mascotas.',
      icon: '💡',
    },
    {
      title: 'Comunidad de Amantes de las Mascotas',
      description: 'Conéctate con otros dueños, comparte experiencias y encuentra apoyo.',
      icon: '❤️',
    },
    // Agrega más características
  ];

  return (
    <section className="features">
      <h2>¿Por qué elegir Pet Passion?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;