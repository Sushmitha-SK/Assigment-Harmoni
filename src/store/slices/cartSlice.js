import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: 0,
        items: [],
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
            state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
            state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        },
    },
});

export const { increment, decrement, addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
