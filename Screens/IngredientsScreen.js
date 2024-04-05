import { ScrollView, StyleSheet, Text } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import { baseEssentials, mixersEssentials } from "./BarCartScreen";
import { GlobalStyles } from "../util/constants/globalStyles";
import { LinearGradient } from "expo-linear-gradient";

function IngredientsScreen() {
  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={["#468891", "#125e6e"]}
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader>Ingredients</MainHeader>
          <InstructionsBlade>
            First, let's add what ingredients you have onhand
          </InstructionsBlade>
          <ChecklistBox titleOptionsObject={baseEssentials} />
          <ChecklistBox titleOptionsObject={mixersEssentials} />
        </ScrollView>
      </LinearGradient>
      <Footer />
    </>
  );
}

export default IngredientsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
