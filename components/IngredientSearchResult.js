import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, removeIngredient } from "../util/slices/inventorySlice";


function IngredientSearchResult({ ingredientName }) {
  const ingredientsArray = useSelector(
    (state) => state.inventory.ingredientsArray
  );

  const dispatch = useDispatch();

function toggleIngredient() {
  ingredientsArray.includes(ingredientName)
  ? dispatch(removeIngredient(ingredientName))
  : dispatch(addIngredient(ingredientName))
}

  return (
    <View style={styles.ingredientSearchResult}>
      <Text style={styles.ingredientSearchResultCopy}>{ingredientName}</Text>
      <Pressable onPress={toggleIngredient}>
        <Ionicons
          name={
            ingredientsArray.includes(ingredientName)
              ? "remove-circle-outline"
              : "add-circle-outline"
          }
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </Pressable>
    </View>
  );
}

export default IngredientSearchResult;

const styles = StyleSheet.create({
  ingredientSearchResult: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
    paddingBottom: 6,
  },
  ingredientSearchResultCopy: {
    color: GlobalStyles.colors.robRoy100,
    flex: 1,
    fontSize: 16,
  },
});
