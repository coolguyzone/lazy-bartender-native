import { createSlice } from "@reduxjs/toolkit";
import { Constants } from "../constants/constants";

let drinkList = Constants.drinkList;

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    ingredientsArray: ["Water", "Salt", "Ice"],
    drinksArray: [],
    favoritesArray: [],
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
        state.drinksArray.push(drink.name);
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
        state.drinksArray.push(drink.name);
      });
    },
    addFavorite: (state, action) => {
      if (state.favoritesArray.indexOf(action.payload) < 1) {
        state.favoritesArray.push(action.payload);
      }
      return;
    },
    removeFavorite: (state, action) => {
      const index = state.favoritesArray.indexOf(action.payload);
      if (index > -1) {
        state.favoritesArray.splice(index, 1);
      }
      return;
    },
  },
});

export const { addIngredient, removeIngredient, addFavorite, removeFavorite } =
  inventorySlice.actions;
export const ingredientsArray = (state) =>
  state.inventory.ingredientsArray.toString();

export default inventorySlice.reducer;
