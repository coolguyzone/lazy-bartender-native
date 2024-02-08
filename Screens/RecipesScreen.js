import { ScrollView, Text } from "react-native";
import RecipeCard from "../components/recipe-components/RecipeCard";
import { Constants } from "../util/constants";
import { useSelector, useDispatch } from "react-redux";
import { ingredientsArray } from "../util/slices/inventorySlice";

function RecipesScreen() {
  const drinkList = Constants.drinkList;
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);

  return (
    <ScrollView>
      <Text style={{ marginVertical: 20 }}>Recipes Screen</Text>

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
        return <RecipeCard>{drink.name}</RecipeCard>;
      })}
    </ScrollView>
  );
}

export default RecipesScreen;
