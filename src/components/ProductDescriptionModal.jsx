import React, { useState } from 'react';
import { Modal, Box, Typography, IconButton, Button } from '@mui/material';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductDescriptionModal = ({ isModalOpen, handleCloseModal, product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

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

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ ...product, quantity }));
            handleCloseModal();
        }
    };

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="product-modal-title"
                aria-describedby="product-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        borderRadius: '10px',
                        boxShadow: 24,
                        p: 4,
                        maxHeight: '90vh',
                        overflowY: 'auto',
                    }}
                >
                    <IconButton
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            zIndex: 1,
                        }}
                    >
                        <IoMdClose />
                    </IconButton>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            marginTop: '1%'
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                // border: '1px solid #ddd',
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', height: 'auto', maxWidth: '250px', fontWeight: 'bold' }}
                            />
                        </Box>

                        <Box sx={{ flex: 2 }}>
                            <Typography id="product-modal-title" component="h4" sx={{ mb: 2, fontWeight: 600, fontSize: '18px' }}>
                                {product.title}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Typography variant="body1" sx={{ mr: 1 }}>
                                    Rating:
                                </Typography>
                                {renderStars(Math.round(product.rating?.rate))}
                                <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                                    ({product.rating?.count} reviews)
                                </Typography>
                            </Box>

                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                ${product.price}
                            </Typography>

                            <Typography id="product-modal-description" sx={{ mb: 2, color: '#3c3c3c', fontSize: '14px' }}>
                                {product.description}
                            </Typography>

                            <hr style={{ marginTop: '6%', marginBottom: '6%' }} />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    mt: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        border: '1px solid #333',
                                        borderRadius: '2px'
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={handleDecrease}
                                        sx={{
                                            minWidth: '40px',
                                            borderRadius: '2px',
                                            borderRight: '1px solid #333'
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Typography
                                        sx={{
                                            mx: 2,
                                            minWidth: '30px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {quantity}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        onClick={handleIncrease}
                                        sx={{
                                            minWidth: '40px',
                                            border: '1px solid #fec240',
                                            borderRadius: '2px',
                                            backgroundColor: '#fec240',
                                            color: '#fff'
                                        }}
                                    >
                                        +
                                    </Button>
                                </Box>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddToCart}
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                        flex: 1,
                                        background: '#333',
                                        color: '#fff'
                                    }}
                                >
                                    Add To Cart
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ProductDescriptionModal;
