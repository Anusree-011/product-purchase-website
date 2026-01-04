import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.count += 1;
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            if (itemToRemove) {
                state.count -= itemToRemove.quantity;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        updateQuantity: (state, action) => {
            const { id, amount } = action.payload; // amount can be 1 or -1
            const item = state.items.find(item => item.id === id);
            if (item) {
                if (item.quantity + amount > 0) {
                    item.quantity += amount;
                    state.count += amount;
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;