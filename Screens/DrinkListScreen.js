import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import { baseEssentials, mixersEssentials } from "./BarCartScreen";
import { GlobalStyles } from "../util/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import DrinkCard from "../components/drink-list-components/DrinkCard";

function DrinkListScreen() {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <MainHeader>My Drink List</MainHeader>
        <InstructionsBlade>Drinks available with your pantry</InstructionsBlade>
        <DrinkCard />
      </ScrollView>
      <Footer />
    </>
  );
}

export default DrinkListScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 8,
    backgroundColor: GlobalStyles.colors.towerGray600,
  },
  drinkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: GlobalStyles.colors.towerGray500,
    widht: 356,
    height: 54,
    borderRadius: 5,
    padding: 8,
  },
  drinkTitle: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    marginTop: 6,
    marginLeft: 4,
    width: 210,
  },
  drinkPercentage: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
    marginTop: 8,
  },
  faveIcon: {
    marginLeft: 12,
    marginTop: 5,
  }
});
