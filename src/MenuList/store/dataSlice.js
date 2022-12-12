import { createSlice } from "@reduxjs/toolkit";
import { fetchMenu } from "./menu.action";
const storeData = createSlice({
  name: "menuStore",
  initialState: {
    cart: [],
    menu: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cart = action.payload.data;
    }
  },
  extraReducers: {
    [fetchMenu.fulfilled]: (state, action) => {
        state.menu = action.payload;
    }
  },
});

export const { addCart } = storeData.actions;
export default storeData.reducer;
