import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../Cart/store/cartSlice";
import MenuReducer from '../MenuList/store/dataSlice'

const store = configureStore({
    reducer: {
        menu: MenuReducer,
        cart: cartReducer
    }
});

export default store;