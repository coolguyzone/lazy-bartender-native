import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
import { LinearGradient } from "expo-linear-gradient";


function BarCartScreen() {
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);

  let baseEssentialsInBar = [];
  let mixerEssentialsInBar = [];
  let darkSpiritsInBar = [];
  let lightSpiritsInBar = [];
  let moreMixersInBar = [];
  let liquersEtcInBar = [];
  let pantryAndProduceInBar = [];


  Constants.cocktailBaseEssentials.forEach((ingredient) => {
    if(ingredients.includes(ingredient)) {
      baseEssentialsInBar.push(ingredient)
    }
  })

  Constants.mixerEssentials.forEach((ingredient) => {
    if(ingredients.includes(ingredient)) {
      mixerEssentialsInBar.push(ingredient)
    }
  })

  Constants.brownBooze.forEach((ingredient) => {
    if(ingredients.includes(ingredient)) {
      darkSpiritsInBar.push(ingredient)
    }
  })

  Constants.clearBooze.forEach((ingredient) => {
    if(ingredients.includes(ingredient)) {
      lightSpiritsInBar.push(ingredient)
    }
  })

  Constants.mixers.forEach((ingredient) => {
    if(ingredients.includes(ingredient)) {
      moreMixersInBar.push(ingredient)
    }
  })

  Constants.fruitBooze.forEach((ingredient) => {
    if(ingredients.includes(ingredient)) {
      liquersEtcInBar.push(ingredient)
    }
  })

  Constants.produce.forEach((ingredient) => {
    if(ingredients.includes(ingredient)) {
      pantryAndProduceInBar.push(ingredient)
    }
  })

  const baseEssentials = {
    title: "Cocktail Base Essentials",
    options: baseEssentialsInBar,
  };
  
  const mixersEssentials = {
    title: "Mixer Essentials",
    options: mixerEssentialsInBar,
  };
  
  const darkSpirits = {
    title: "Dark Spirits",
    options: darkSpiritsInBar,
  };
  
  const lightSpirits = {
    title: "Light Spirits",
    options: lightSpiritsInBar,
  };
  
  const moreMixers = {
    title: "More Mixers",
    options: moreMixersInBar,
  };
  
  const liquersEtc = {
    title: "Liquers etc.",
    options: liquersEtcInBar,
  };
  
  const pantryAndProduce = {
    title: "Pantry & Produce",
    options: pantryAndProduceInBar,
  };


  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={["#468891", "#125e6e"]}
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader>MY BAR</MainHeader>
          {baseEssentials.options.length > 0 && <ChecklistBox titleOptionsObject={baseEssentials} /> }
          {mixersEssentials.options.length > 0 && <ChecklistBox titleOptionsObject={mixersEssentials} /> }
          {darkSpirits.options.length > 0 && <ChecklistBox titleOptionsObject={darkSpirits} /> }
          {lightSpirits.options.length > 0 && <ChecklistBox titleOptionsObject={lightSpirits} /> }
          {moreMixers.options.length > 0 && <ChecklistBox titleOptionsObject={moreMixers} /> }
          {liquersEtc.options.length > 0 && <ChecklistBox titleOptionsObject={liquersEtc} /> }
          {pantryAndProduce.options.length > 0 && <ChecklistBox titleOptionsObject={pantryAndProduce} /> }
          

        </ScrollView>
      </LinearGradient>
      <BarCartSubFooter />
      <Footer />
    </>
  );
}

export default BarCartScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 60,
  },
});
