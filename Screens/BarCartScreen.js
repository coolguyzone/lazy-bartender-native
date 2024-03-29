import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
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
import BarCartSubFooter from "../components/bar-cart-components/BarCartSubFooter";

export const baseEssentials = {
  title: "Cocktail Base Essentials",
  options: Constants.cocktailBaseEssentials,
};

export const mixersEssentials = {
  title: "Mixer Essentials",
  options: Constants.mixerEssentials,
};

function BarCartScreen() {
  const ingredients = useSelector((state) => state.inventory);

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <MainHeader>BAR CART </MainHeader>
        <InstructionsBlade>
          First, Lets add what ingredients you have on hand
        </InstructionsBlade>
        <ChecklistBox titleOptionsObject={baseEssentials} />
        <ChecklistBox titleOptionsObject={mixersEssentials} />
      </ScrollView>


      
      <BarCartSubFooter />
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
});
