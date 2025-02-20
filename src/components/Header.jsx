import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { getCategories } from '../api/api';

const Header = ({ searchTerm, setSearchTerm }) => {
    const [categories, setCategories] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const cartCount = useSelector((state) => state.cart.count);
    const navigate = useNavigate();
    const searchBoxRef = useRef(null);

    const fetchCategories = async () => {
        try {
            const categories = await getCategories();
            setCategories(categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleInputFocus = () => {
        fetchCategories();
        setShowSuggestions(true);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchTerm(value);
    };

    const handleSuggestionClick = (category) => {
        setInputValue(category);
        setSearchTerm(category);
        setShowSuggestions(false);
    };

    const handleTitleClick = () => {
        setInputValue('');
        setSearchTerm('');
        navigate('/');
    };

    const handleClickOutside = (event) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <h1 className="store-title" onClick={handleTitleClick}>
                Harmoni
            </h1>

            <div className="header-right">
                <nav className="nav-links">
                    <Link to="/" className="nav-link">HomePage</Link>
                    <Link to="/" className="nav-link">Categories</Link>
                    <Link to="/" className="nav-link">ContactUs</Link>
                    <Link to="/" className="nav-link">More Options</Link>
                </nav>

                <div className="search-box" ref={searchBoxRef}>
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="search-input"
                        value={inputValue}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange}
                    />
                    <span className="search-icon">
                        <LuSearch />
                    </span>
                    {showSuggestions && categories.length > 0 && (
                        <ul className="suggestions-list">
                            {categories
                                .filter((category) =>
                                    category.toLowerCase().includes(inputValue.toLowerCase())
                                )
                                .map((category) => (
                                    <li
                                        key={category}
                                        className="suggestion-item"
                                        onClick={() => handleSuggestionClick(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>

                <div className="cart">
                    <FaShoppingCart className="cart-icon" />
                    {cartCount > 0 && (
                        <span className="cart-count">
                            {cartCount}
                        </span>
                    )}
                </div>

                <div className="user">
                    <FaUserCircle className="user-icon" />
                </div>
            </div>
        </header>
    );
};

export default Header;
