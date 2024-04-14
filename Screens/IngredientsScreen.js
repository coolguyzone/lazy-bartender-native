import { ScrollView, StyleSheet, Text } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import { GlobalStyles } from "../util/constants/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Constants } from "../util/constants/constants";


export const baseEssentials = {
  title: "Cocktail Base Essentials",
  options: Constants.cocktailBaseEssentials,
};

export const mixersEssentials = {
  title: "Mixer Essentials",
  options: Constants.mixerEssentials,
};

export const darkSpirits = {
  title: "Dark Spirits",
  options: Constants.brownBooze,
};

export const lightSpirits = {
  title: "Light Spirits",
  options: Constants.clearBooze,
};

export const moreMixers = {
  title: "More Mixers",
  options: Constants.mixers,
};

export const liquersEtc = {
  title: "Liquers etc.",
  options: Constants.fruitBooze,
};

export const pantryAndProduce = {
  title: "Pantry & Produce",
  options: Constants.produce,
};

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
          <ChecklistBox titleOptionsObject={baseEssentials} />
          <ChecklistBox titleOptionsObject={mixersEssentials} />
          <ChecklistBox titleOptionsObject={darkSpirits} />
          <ChecklistBox titleOptionsObject={lightSpirits} />
          <ChecklistBox titleOptionsObject={moreMixers} />
          <ChecklistBox titleOptionsObject={liquersEtc} />
          <ChecklistBox titleOptionsObject={pantryAndProduce} />
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
    paddingTop: 60,
  },
});
