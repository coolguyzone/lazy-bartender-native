import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import { baseEssentials, mixersEssentials } from "./BarCartScreen";
import { GlobalStyles } from "../util/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import RecipeHeader from "../components/recipe-components/RecipeHeader";

function RecipeScreen() {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <RecipeHeader />
        <View style={styles.recipeImage}>
          <Text>Recipe Image</Text>
        </View>
        <View style={styles.recipeH1BladeContainer}>
          <Text style={styles.recipeH1BladeTitle}>Cocktail Name</Text>
        </View>
        <View style={styles.strengthBarContainer}>
          <Text style={styles.strengthBarCopy}>Strength:</Text>
        </View>
        <View style={styles.divider}></View>
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
      </ScrollView>
      <Footer />
    </>
  );
}

export default RecipeScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 8,
    backgroundColor: GlobalStyles.colors.towerGray600,
  },
  recipeImage: {
    height: 190,
    borderColor: GlobalStyles.colors.robRoy100,
    borderWidth: 1,
    color: GlobalStyles.colors.robRoy100,
  },
  recipeH1BladeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recipeH1BladeTitle: {
    fontSize: 24,
    marginVertical: 20,
    color: GlobalStyles.colors.robRoy100,
  },
  strengthBarContainer: {},
  strengthBarCopy: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
  },
  divider: {
    borderColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 24,
  },
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
