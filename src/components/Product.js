import React from 'react';

function Product({ product, addToCart }) {
  const { id, name, price } = product;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
