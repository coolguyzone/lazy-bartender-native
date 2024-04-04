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
        <View style={styles.recipeImage}><Text>Recipe Image</Text></View>
        <View style={styles.recipeH1BladeContainer}>
        <Text style={styles.recipeH1BladeTitle}>Cocktail Name</Text>
       
        </View>  
        <View style={styles.strengthBarContainer}>
          <Text style={styles.strengthBarCopy}>Strength:</Text>
        </View>
        <View style={styles.divider}></View>     
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
    fontWeight: 'bold',
    marginLeft: 16,
  },
  divider: {
    borderColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 24,
  },
});
