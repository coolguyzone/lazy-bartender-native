import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useDispatch, useSelector } from "react-redux";

function IngredientBlade({ drinkObj }) {
  const ingredientsArray = useSelector(
    (state) => state.inventory.ingredientsArray
  );

  return (
    <View style={styles.ingredientBladeContainer}>
      <View style={styles.ingredientBladeRow}>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeHeader}>Ingredients:</Text>
        </View>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeHeader}>Qty</Text>
        </View>
        <View
          style={[
            styles.ingredientBladeColumn,
            styles.ingredientBladeFinalColumn,
          ]}
        >
          <Text style={styles.ingredientBladeHeader}>In Bar</Text>
        </View>
      </View>

      {drinkObj.ingredients.map((ingredient, i) => {
        return (
          <View style={styles.ingredientBladeRow}>
            <View style={styles.ingredientBladeColumn}>
              <Text style={styles.ingredientBladeText}>
                {drinkObj.ingredients[i]}
              </Text>
            </View>
            <View style={styles.ingredientBladeColumn}>
              <Text style={styles.ingredientBladeText}>
                {drinkObj.measures[i]}
              </Text>
            </View>
            <View
              style={[
                styles.ingredientBladeColumn,
                styles.ingredientBladeFinalColumn,
              ]}
            >
              <View
                style={[
                  styles.ingredientBladeCircle,
                  {
                    backgroundColor: ingredientsArray.includes(ingredient)
                      ? GlobalStyles.colors.tonysPink300
                      : "",
                  },
                ]}
              ></View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default IngredientBlade;

const styles = StyleSheet.create({
  ingredientBladeContainer: {
    paddingHorizontal: 24,
  },
  ingredientBladeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  ingredientBladeColumn: {
    flexDirection: "column",
    flex: 1,
  },
  ingredientBladeFinalColumn: {
    flex: 0.5,
  },
  ingredientBladeCircle: {
    flex: 0.5,
  },
  ingredientBladeHeader: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 16,
    fontWeight: "bold",
  },
  ingredientBladeText: {
    color: GlobalStyles.colors.robRoy100,
  },
  ingredientBladeCircle: {
    marginLeft: 14,
    height: 18,
    width: 18,
    borderColor: GlobalStyles.colors.robRoy100,
    borderWidth: 1,
    borderRadius: 100,
  },
});
