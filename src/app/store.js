import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productListingReducer from "./features/productsListing/productListingSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        productListing: productListingReducer,
        cart: cartReducer,
    },
});
