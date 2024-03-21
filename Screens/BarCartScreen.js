import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { Constants } from "../util/constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient, ingredientsArray } from "../util/slices/inventorySlice";
import IngredientCheckBox from "../components/IngredientCheckBox";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import ScrollArrowBlade from "../components/ScrollArrowBlade";
import Footer from "../components/Footer";
import { GlobalStyles } from "../util/constants/globalStyles";

const baseEssentials = {
  title: "Cocktail Base Essentials",
  options: [
    "Vodka",
    "Tequila",
    "Mescal",
    "Scotch",
    "Bourbon",
    "Rye",
    "Dark Rum",
    "Light Rum",
    "Brandy",
  ],
};

const mixersEssentials = {
  title: "Mixers Essentials",
  options: [
    "Lime",
    "Orange",
    "Cranberry Juice",
    "Cola",
    "Tonic Water",
    "Club Soda",
    "Cream",
    "Coffee",
    "Simple Syrup",
  ],
};

function BarCartScreen() {
  const ingredients = useSelector((state) => state.inventory);

  return (
    <>
    <ScrollView style={styles.scrollView}>
      <MainHeader />
      <InstructionsBlade>
        First, Lets add what ingredients you have on hand
      </InstructionsBlade>
      <ChecklistBox titleOptionsObject={baseEssentials} />
      <View style={styles.spacer}></View>
      <ChecklistBox titleOptionsObject={mixersEssentials} />
      <ScrollArrowBlade />      
    </ScrollView>

      <Footer />
    </>
  );
}

export default BarCartScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.towerGray600,
  },
  spacer: {
    height: 20,
  },

});
