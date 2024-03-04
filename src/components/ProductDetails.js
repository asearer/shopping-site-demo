import React from 'react';

function ProductDetails({ product }) {
  const { name, description, price, images } = product;

  return (
    <div className="product-details">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div className="product-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
