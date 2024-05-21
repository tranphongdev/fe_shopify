import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartsValue: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartsValue.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartsValue[itemIndex].qty += 1;
            } else {
                const temp = { ...action.payload, qty: 1 };
                state.cartsValue = [...state.cartsValue, temp];
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
