import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: any;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addTocart: (state, action: PayloadAction<IProduct>) => {
            // Always push a new instance of the product, regardless of whether it already exists
            state.push({ ...action.payload, quantity: action.payload.quantity || 1 });
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        increaseQuantity: (state, action: PayloadAction<IProduct>) => {
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        },
        decreaseQuantity: (state, action: PayloadAction<IProduct>) => {
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            );
        },
        clearCart: (state) => {
            return [];
        },
    },
});

export const { addTocart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
