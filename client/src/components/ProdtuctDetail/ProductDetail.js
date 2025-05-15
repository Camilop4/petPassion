import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ProductInfo from './ProductInfo';
import ImageGallery from './ImageGalery';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`producto/id/${id}`); // Ajusta la ruta de tu API
  const navigate = useNavigate();

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>Error al cargar los detalles del producto: {error}</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  const handleVolver = () => {
    navigate(-1); // Navega una página atrás en el historial
  };

  return (
    <div className="product-detail-container">
      <button onClick={handleVolver} className="volver-button">Volver</button>
      <ImageGallery images={product.imagen} /> {/* Suponiendo que tu API devuelve un array de URLs de imágenes en 'imagenes' */}
      <ProductInfo product={product} />
    </div>
  );
}

export default ProductDetail;