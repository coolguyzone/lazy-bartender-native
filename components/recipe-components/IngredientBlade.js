import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";

function IngredientBlade() {
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
      <View style={styles.ingredientBladeRow}>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeText}>Rye Whiskey</Text>
        </View>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeText}>2 Ounces</Text>
        </View>
        <View
          style={[
            styles.ingredientBladeColumn,
            styles.ingredientBladeFinalColumn,
          ]}
        >
          <View style={styles.ingredientBladeCircle}></View>
        </View>
      </View>
      <View style={styles.ingredientBladeRow}>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeText}>Sweet Vermouth</Text>
        </View>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeText}>1 Ounce</Text>
        </View>
        <View
          style={[
            styles.ingredientBladeColumn,
            styles.ingredientBladeFinalColumn,
          ]}
        >
          <View style={styles.ingredientBladeCircle}></View>
        </View>
      </View>
      <View style={styles.ingredientBladeRow}>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeText}>Aromatic Bitters</Text>
        </View>
        <View style={styles.ingredientBladeColumn}>
          <Text style={styles.ingredientBladeText}>2-3 Dashes</Text>
        </View>
        <View
          style={[
            styles.ingredientBladeColumn,
            styles.ingredientBladeFinalColumn,
          ]}
        >
          <View style={styles.ingredientBladeCircle}></View>
        </View>
      </View>
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
    // backgroundColor: GlobalStyles.colors.tonysPink300,
    borderWidth: 1,
    borderRadius: 100,
  },
});
