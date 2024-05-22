import { configureStore } from '@reduxjs/toolkit';

import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import authSlice from './features/authSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        allCart: cartReducer,
        auth: authSlice,
    },
});
