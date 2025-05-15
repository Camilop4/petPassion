import React from 'react';
import './ImageGalery.css'; // Importa estilos específicos si los tienes

function ImageGallery({ images }) {
  if (!images) { // Verifica si images existe (no es null o undefined)
    return <p>No hay imágenes disponibles para este producto.</p>;
  }

  return (
    <div className="image-gallery">
      <img key="0" src={images} alt="Imagen del producto" />
    </div>
  );
}

export default ImageGallery;