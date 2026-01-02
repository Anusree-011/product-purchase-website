import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            // For now, we just increment the count to match the current behavior
            state.count += 1;
            // We could also add the product to items array if we want to build the full cart logic later
            // state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        },
    },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
