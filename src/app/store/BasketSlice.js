import { createSlice } from "@reduxjs/toolkit";
export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: {},
        nbItems: 0,
    },
    reducers: {
        addToBasket: (state, action) => {
            if (!state.basket[action.payload]) {
                state.basket[action.payload] = 1;
            } else {
                state.basket[action.payload]++;
            }
            state.nbItems++;
        },

        removeFromBasket: (state, action) => {
            if (state.basket[action.payload] > 0) {
                state.basket[action.payload]--;
                state.nbItems--;
            }
        },

        removeAllFromBasket: (state) => {
            state.basket = {};
            state.nbItems = 0;
        },

        setQuantity: (state, action) => {
            const selectedId = action.payload.selectedId;
            const newQuantity = Number(action.payload.option);
            state.nbItems =
                state.nbItems - state.basket[selectedId] + newQuantity;
            state.basket[selectedId] = newQuantity;
        },
    },
});

export const {
    addToBasket,
    removeFromBasket,
    setQuantity,
    removeAllFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
