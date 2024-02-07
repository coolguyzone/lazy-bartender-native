import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    ingredientsArray: ['water'],
  },
  reducers: {
    addIngredient: (state, action) => {
      console.log('addIngredient')
      state.ingredientsArray.push(action.payload);
    },
  },
});

export const { addIngredient }  = inventorySlice.actions;
export const ingredientsArray = (state) => state.inventory.ingredientsArray;

export default inventorySlice.reducer;
