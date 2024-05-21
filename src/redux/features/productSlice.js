import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setDataProduct } = productSlice.actions;

export default productSlice.reducer;
