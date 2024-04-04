import { createSlice } from "@reduxjs/toolkit";
import { Constants } from "../constants/constants";

function updateDrinksArray() {}

let drinkList = Constants.drinkList;

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    ingredientsArray: ["Water"],
    drinksArray: [],
  },
  reducers: {
    addIngredient: (state, action) => {
      state.ingredientsArray.push(action.payload);
      state.drinksArray = [];
      //update the drinksArray anytime something is added (or removed below)
      drinkList.map((drink) => {
        let drinkIngredients = drink.ingredients;
        for (let i = 0; i < drinkIngredients.length; i++) {
          if (state.ingredientsArray.indexOf(drinkIngredients[i]) < 0) {
            return;
          } 
        }
        state.drinksArray.push(drink.name)
      });
    },
    removeIngredient: (state, action) => {
      const index = state.ingredientsArray.indexOf(action.payload);
      if (index > -1) {
        state.ingredientsArray.splice(index, 1);
      }
      state.drinksArray = [];
      drinkList.map((drink) => {
        let drinkIngredients = drink.ingredients;
        for (let i = 0; i < drinkIngredients.length; i++) {
          if (state.ingredientsArray.indexOf(drinkIngredients[i]) < 0) {
            return;
          } 
        }
        state.drinksArray.push(drink.name)
      });
    },
  },
});

export const { addIngredient, removeIngredient } = inventorySlice.actions;
export const ingredientsArray = (state) =>
  state.inventory.ingredientsArray.toString();

export default inventorySlice.reducer;
