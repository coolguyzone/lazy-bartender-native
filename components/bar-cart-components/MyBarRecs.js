import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateAlmostDrinks } from "../../util/slices/inventorySlice";

function MyBarRecs() {
  const dispatch = useDispatch();
  const almostDrinks = useSelector((state) => state.inventory.almostDrinks);
  const ingredientsArray = useSelector(
    (state) => state.inventory.ingredientsArray
  );
  let sortedDrinkRecsArray = useSelector(
    (state) => state.inventory.sortedDrinkRecsArray
  );

  useEffect(() => {
    dispatch(calculateAlmostDrinks());
  }, [ingredientsArray]);

  return (
    <View style={styles.suggestedIngredientsWrapper}>
      <View style={styles.suggestedIngredientsHeader}>
        <Text style={styles.suggestedIngredientsHeaderCopy}>
          Suggested Ingredients to make more drinks!
        </Text>
        {sortedDrinkRecsArray.map((ele) => {
          return (
            <View style={styles.suggestedIngredientWrapper} key={ele[0]}>
              <Text style={styles.suggestedIngredientCopy}>{ele[0]}</Text>
              <Text style={styles.suggestedIngredientNumber}>
                +{ele[1]} Drinks
              </Text>
              <View>
                <Image
                  source={require("../../assets/images/icons/icon-in-bar.png")}
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
