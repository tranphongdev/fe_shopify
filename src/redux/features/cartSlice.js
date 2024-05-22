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
        removeItemCart: (state, action) => {
            state.cartsValue = state.cartsValue
                .map((item) => (item.id === action.payload ? { ...item, qty: item.qty - 1 } : item))
                .filter((item) => item.qty > 0);
        },
        deleteItem: (state, action) => {
            const newCart = state.cartsValue.filter((item) => item.id !== action.payload);
            return {
                ...state.cartsValue,
                cartsValue: newCart,
            };
        },
        deleteAllItem: (state) => {
            state.cartsValue = [];
        },
    },
});

export const { addToCart, removeItemCart, deleteItem, deleteAllItem } = cartSlice.actions;

export default cartSlice.reducer;
