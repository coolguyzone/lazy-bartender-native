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
        <MainHeader>Cocktail Name</MainHeader>
        <InstructionsBlade>
          First, let's add what ingredients you have onhand
        </InstructionsBlade>
        <ChecklistBox titleOptionsObject={baseEssentials} />
        <ChecklistBox titleOptionsObject={mixersEssentials} />
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
});
