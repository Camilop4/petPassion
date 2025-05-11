import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ProductInfo from './ProductInfo';
import ImageGallery from './ImageGalery';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/producto/${id}`); // Ajusta la ruta de tu API

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>Error al cargar los detalles del producto: {error}</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="product-detail-container">
      <ImageGallery images={product.imagenes} /> {/* Suponiendo que tu API devuelve un array de URLs de imágenes en 'imagenes' */}
      <ProductInfo product={product} />
    </div>
  );
}

export default ProductDetail;