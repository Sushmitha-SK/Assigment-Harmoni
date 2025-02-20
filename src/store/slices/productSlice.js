import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  selectedCategory: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload) {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
  },
});

export const { setProducts, setCategory } = productSlice.actions;
export default productSlice.reducer;
