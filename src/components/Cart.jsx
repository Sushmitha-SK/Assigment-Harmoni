import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';

const Cart = () => {
    const cartCount = useSelector((state) => state.cart.count);
    const cartItems = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart">
            <div className="cart-header p-4 flex justify-between items-center bg-gray-100 shadow-sm">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            <div className="cart-body p-4">
                {cartCount === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex justify-between items-center py-2">
                                    <div className="flex items-center">
                                        <img src={item.image} alt={item.title} className="w-12 h-12 mr-4" />
                                        <span>{item.title}</span>
                                    </div>
                                    <span>${item.price}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="total mt-4 flex justify-between">
                            <strong>Total:</strong>
                            <span>
                                ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                            </span>
                        </div>
                        <div className="checkout mt-4">
                            <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
