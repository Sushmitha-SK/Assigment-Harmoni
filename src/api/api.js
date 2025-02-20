import axios from 'axios';

const url = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

//Get Products
export const getAllProducts = async () => {
    try {
        const response = await url.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

//Get Categories
export const getCategories = async () => {
    try {
        const response = await url.get('/products/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

