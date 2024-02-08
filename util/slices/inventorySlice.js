import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    ingredientsArray: ['Water'],
  },
  reducers: {
    addIngredient: (state, action) => {
      console.log('addIngredient')
      state.ingredientsArray.push(action.payload);
    },
    removeIngredient: (state, action) => {
      const index = state.ingredientsArray.indexOf(action.payload);
      if (index > -1) {
        state.ingredientsArray.splice(index, 1)
      }
    }
  },
});

export const { addIngredient, removeIngredient }  = inventorySlice.actions;
export const ingredientsArray = (state) => state.inventory.ingredientsArray.toString();

export default inventorySlice.reducer;
