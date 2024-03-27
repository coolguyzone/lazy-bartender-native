import { ScrollView, StyleSheet, Text } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import { baseEssentials, mixersEssentials } from "./BarCartScreen";
import { GlobalStyles } from "../util/constants/globalStyles";

function IngredientsScreen() {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <MainHeader>Ingredients</MainHeader>
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

export default IngredientsScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 8,
    backgroundColor: GlobalStyles.colors.towerGray600,
  },
});
