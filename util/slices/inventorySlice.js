import { createSlice } from "@reduxjs/toolkit";
import { Constants } from "../constants/constants";

let drinkList = Constants.drinkList;

let ingredientList = Constants.cocktailBaseEssentials.concat(
  Constants.mixerEssentials,
  Constants.brownBooze,
  Constants.clearBooze,
  Constants.fruitBooze,
  Constants.beerWine,
  Constants.mixers,
  Constants.produce,
  ["Water", "Salt", "Ice"]
);

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    ingredientsArray: ["Water", "Salt", "Ice"],
    drinksArray: [],
    favoritesArray: [],
    drinkSearchArray: [],
    drinkSearchActive: false,
    ingredientSearchArray: [],
    ingredientSearchActive: false,
    almostDrinks: [],
    missingIngredientsArray: [],
    drinkRecsArray: [],
    sortedDrinkRecsArray: [],
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
    drinkSearchTextChanged: (state, action) => {
      state.drinkSearchArray = [];
      for (let i = 0; i < drinkList.length; i++) {
        if (
          drinkList[i].name.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          state.drinkSearchArray.push(drinkList[i].name);
        }
      }
      if (action.payload) {
        state.drinkSearchActive = true;
      } else {
        state.drinkSearchActive = false;
      }
    },
    ingredientSearchTextChanged: (state, action) => {
      state.ingredientSearchArray = [];
      for (let i = 0; i < ingredientList.length; i++) {
        if (
          ingredientList[i].toLowerCase().includes(action.payload.toLowerCase())
        ) {
          state.ingredientSearchArray.push(ingredientList[i]);
        }
      }
      if (action.payload) {
        state.ingredientSearchActive = true;
      } else {
        state.ingredientSearchActive = false;
      }
    },

    calculateAlmostDrinks: (state, action) => {
      state.almostDrinks = [];
      state.missingIngredientsArray = [];
      state.drinkRecsArray = [];
      state.sortedDrinkRecsArray = [];
      drinkList.forEach((drink) => {
        let missingIngredients = 0;
        let missingIngredient;
        drink.ingredients.forEach((ingredient) => {
          if (!state.ingredientsArray.includes(ingredient)) {
            missingIngredients++;
            missingIngredient = ingredient;
          }
        });
        if (missingIngredients === 1) {
          state.almostDrinks.push(drink);
          state.missingIngredientsArray.push(missingIngredient);
        }
      });
      state.missingIngredientsArray.forEach((ingredient) => {
        let found = false;
        for (let i = 0; i < state.drinkRecsArray.length; i++) {
          if (state.drinkRecsArray[i][0] === ingredient) {
            found = true;
            state.drinkRecsArray[i][1]++;
          }
        }
        if (!found) {
          state.drinkRecsArray.push([ingredient, 1]);
        }
      });
      while (
        state.sortedDrinkRecsArray.length < 5 &&
        state.drinkRecsArray.length > 0
      ) {
        let max = ["", 0];
        let maxIndex;
        state.drinkRecsArray.forEach((ele, i) => {
          if (ele[1] > max[1]) {
            max = ele;
            maxIndex = i;
          }
        });
        state.sortedDrinkRecsArray.push(max);
        state.drinkRecsArray.splice(maxIndex, 1);
      }
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  addFavorite,
  removeFavorite,
  drinkSearchTextChanged,
  ingredientSearchTextChanged,
  calculateAlmostDrinks,
} = inventorySlice.actions;
export const ingredientsArray = (state) =>
  state.inventory.ingredientsArray.toString();

export default inventorySlice.reducer;
