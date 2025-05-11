import React from 'react';
import './ImageGalery.css'; // Importa estilos específicos si los tienes

function ImageGallery({ images }) {
  if (!images || images.length === 0) {
    return <p>No hay imágenes disponibles para este producto.</p>;
  }

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Imagen del producto ${index + 1}`} />
      ))}
    </div>
  );
}

export default ImageGallery;