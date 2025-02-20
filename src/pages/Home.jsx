import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/slices/productSlice';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Header from '../components/Header';
import '../styles/Home.css';
import { getAllProducts } from '../api/api';

const Home = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = useSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                dispatch(setProducts(data));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [dispatch]);

    const displayedProducts = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sectionTitle = searchTerm ? searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1) : 'Explore Our Products';

    return (
        <div>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Hero />
            <div className="product-section">
                <div className="productTitle-section">
                    <p>Our Products</p>
                </div>
                <h2 className="section-title">{sectionTitle}</h2>
                <div className="product-grid">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="no-products">No products found.</p>
                    )}
                </div>
            </div>

            <Services />
        </div>
    );
};

export default Home;
