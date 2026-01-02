import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],

}

const productListingSlice = createSlice({
    name: "productListing",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    }
})
export const { setProducts } = productListingSlice.actions;
export default productListingSlice.reducer