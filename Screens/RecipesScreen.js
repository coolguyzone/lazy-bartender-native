import { ScrollView, Text, View, Pressable, StyleSheet } from "react-native";
import RecipeCard from "../components/recipe-components/RecipeCard";
import { Constants } from "../util/constants";
import { useSelector } from "react-redux";
import RecipeModal from "../components/recipe-components/RecipeModal";
import { useState, useEffect, useLayoutEffect } from "react";

function RecipesScreen() {
  const drinkList = Constants.drinkList;
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);
  const [modalVisible, setModalVisible] = useState(true);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState([]);

  function showDrinkModal(title, ingredients, instructions) {
    setRecipeTitle(title);
    setRecipeIngredients(ingredients);
    setRecipeInstructions(instructions);
    setModalVisible(true);
  }

  return (
    <ScrollView>
      <Text style={{ marginVertical: 20 }}>Recipes Screen</Text>

      <RecipeModal
        recipeTitle={recipeTitle}
        recipeIngredients={recipeIngredients}
        recipeInstructions={recipeInstructions}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {ingredients.map((ingredient) => (
        <Text>{ingredient}</Text>
      ))}

      {drinkList.map((drink) => {
        let drinkIngredients = drink.ingredients;
        for (let i = 0; i < drinkIngredients.length; i++) {
          if (ingredients.indexOf(drinkIngredients[i]) < 0) {
            return;
          }
        }
        console.log("drink", drink);
        return (
          <Pressable
            onPress={() =>
              showDrinkModal(
                drink.name,
                drink.ingredients[0].toString(),
                drink.instructions
              )
            }
          >
            <RecipeCard>{drink.name}</RecipeCard>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

export default RecipesScreen;
