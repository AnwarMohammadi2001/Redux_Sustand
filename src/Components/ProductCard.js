import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={addToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
