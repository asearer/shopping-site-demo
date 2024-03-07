// CartItem.js
import React from 'react';

function CartItem({ item, removeFromCart, updateQuantity }) {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(item.id, newQuantity);
  };

  const incrementQuantity = () => {
    const newQuantity = item.quantity + 1;
    updateQuantity(item.id, newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = item.quantity - 1;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <li>
      <div>
        <span>{item.name} - ${item.price}</span>
        <div>
          <button onClick={decrementQuantity}>-</button>
          <input type="number" value={item.quantity} onChange={handleQuantityChange} />
          <button onClick={incrementQuantity}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
