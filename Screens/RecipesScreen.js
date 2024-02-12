import {
  ScrollView,
  Text,
  Modal,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
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

      <Modal  animationType="slide" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text  style={styles.modalText}>This is the MODAL!</Text>
          <Pressable>
            <Text>Here is a pressable</Text>
          </Pressable>
          </View>
        </View>
      </Modal>

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

const styles = StyleSheet.create({
  ceneteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: 280,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: 'green',
    fontSize: 12,
  }
});
