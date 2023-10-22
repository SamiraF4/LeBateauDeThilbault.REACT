import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../store/BasketSlice";

export default configureStore({
    reducer: {
        basket: basketReducer,
    },
});
