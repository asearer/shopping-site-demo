// Product.js
import React from 'react';

function Product({ product, addToCart }) {
  const { id, name, price } = product;

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
