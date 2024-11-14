import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart , removeItemFromCart } from "../features/card/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 p-3 bg-white rounded"
            >
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => dispatch(addItemToCart(item))}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
