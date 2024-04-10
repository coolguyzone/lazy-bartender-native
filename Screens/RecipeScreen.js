import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import { baseEssentials, mixersEssentials } from "./BarCartScreen";
import { GlobalStyles } from "../util/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import RecipeHeader from "../components/recipe-components/RecipeHeader";
import IngredientBlade from "../components/recipe-components/IngredientBlade";
import InstructionBlade from "../components/recipe-components/InstructionBlade";
import { LinearGradient } from "expo-linear-gradient";

function RecipeScreen({ route }) {
  const drinkObj = route.params?.drink;
 

  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={["#468891", "#125e6e"]}
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>
          <RecipeHeader />
          <View style={styles.recipeImageContainer}>
            {drinkObj.imageUrl ? <Image source={drinkObj.imageUrl} style={styles.recipeImage} /> : <Text>Recipe Image</Text>}
            
          </View>
          <View style={styles.recipeH1BladeContainer}>
            <Text style={styles.recipeH1BladeTitle}>{drinkObj.name}</Text>
          </View>
          <View style={styles.strengthBarContainer}>
            <Text style={styles.strengthBarCopy}>Strength:</Text>
          </View>
          <View style={styles.divider}></View>
          <IngredientBlade drinkObj={drinkObj} />
          <View style={styles.divider}></View>
          <InstructionBlade drinkObj={drinkObj} />
        </ScrollView>
      </LinearGradient>

      <Footer />
    </>
  );
}

export default RecipeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 60,
    paddingTop: 60,
  },
  recipeImageContainer: {
    height: 190,
    borderColor: GlobalStyles.colors.robRoy100,
    borderWidth: 1,
    color: GlobalStyles.colors.robRoy100,
  },
  recipeImage: {
    height: 190,
    width: 390,
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
});
