import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { calculateAlmostDrinks } from "../../util/slices/inventorySlice";

function MyBarRecs({ ingredients }) {
  const dispatch = useDispatch();
  const almostDrinks = useSelector((state) => state.inventory.almostDrinks);
  const ingredientsArray = useSelector((state) => state.inventory.ingredientsArray);
  const sortedDrinkRecsArray = useSelector(
    (state) => state.inventory.sortedDrinkRecsArray
  );

  useEffect(() => {
    dispatch(calculateAlmostDrinks());
  }, [ingredientsArray]);

  return (
    <View style={styles.suggestedIngredientsWrapper}>
      <View style={styles.suggestedIngredientsHeader}>
        <Text style={styles.suggestedIngredientsHeaderCopy}>
          Suggested Ingredients: If you have these ingredients you can make X
          more drinks
        </Text>
        {sortedDrinkRecsArray.map((ele) => {
          return (
            <View style={styles.suggestedIngredientWrapper}>
              <Text style={styles.suggestedIngredientCopy}>{ele[0]}</Text>
              <Text style={styles.suggestedIngredientNumber}>{ele[1]} Drinks</Text>
              <View>
                <Image
                  source={require("../../assets/images/icons/icon-drink.png")}
                  style={styles.suggestedIngredientIcon}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default MyBarRecs;

const styles = StyleSheet.create({
  suggestedIngredientsHeaderCopy: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
  },
  suggestedIngredientWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  suggestedIngredientCopy: {
    flex: 1,
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
  },
  suggestedIngredientNumber: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
    flex: 0.3,
  },
  suggestedIngredientIcon: {
    width: 12,
    height: 12,
    marginTop: 4,
  },
});
