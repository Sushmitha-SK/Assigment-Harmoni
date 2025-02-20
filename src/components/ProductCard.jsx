import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import '../styles/ProductCard.css';
import ProductDescriptionModal from './ProductDescriptionModal';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    const handleAddToCart = (event) => {
        event.stopPropagation();
        if (product) {
            dispatch(addToCart(product));
        }
    };

    return (
        <>
            <div className="product-card" onClick={handleCardClick}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
                <h3 className="product-title">{product.title}</h3>
                <div className="product-details">
                    <div className="product-rating">
                        <span className="product-price">${product.price}</span>&nbsp;
                        {renderStars(Math.round(product.rating?.rate))}
                        <span className="rating-count">({product.rating?.count})</span>
                    </div>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="product-button"
                >
                    Add To Cart
                </button>
            </div>

            {isModalOpen &&
                <ProductDescriptionModal
                    isModalOpen={isModalOpen}
                    handleCloseModal={handleCloseModal}
                    product={product}
                />
            }
        </>
    );
};

export default ProductCard;
