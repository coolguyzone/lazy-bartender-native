import { ImageBackground, ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Constants } from "../util/constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { calculateAlmostDrinks } from "../util/slices/inventorySlice";
import MainHeader from "../components/MainHeader";
import ChecklistBox from "../components/CheckListBox";
import Footer from "../components/Footer";
import BarCartSubFooter from "../components/bar-cart-components/BarCartSubFooter";
import { GlobalStyles } from "../util/constants/globalStyles";
import MyBarIngredientList from "../components/bar-cart-components/MyBarIngredientList";
import { useEffect } from "react";
import MyBarRecs from "../components/bar-cart-components/MyBarRecs";

function BarCartScreen() {
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);
  ;
 
  const almostDrinks = useSelector((state) => state.inventory.almostDrinks);

  let baseEssentialsInBar = [];
  let mixerEssentialsInBar = [];
  let darkSpiritsInBar = [];
  let lightSpiritsInBar = [];
  let moreMixersInBar = [];
  let liquersEtcInBar = [];
  let pantryAndProduceInBar = [];

  Constants.cocktailBaseEssentials.forEach((ingredient) => {
    if (ingredients.includes(ingredient)) {
      baseEssentialsInBar.push(ingredient);
    }
  });

  Constants.mixerEssentials.forEach((ingredient) => {
    if (ingredients.includes(ingredient)) {
      mixerEssentialsInBar.push(ingredient);
    }
  });

  Constants.brownBooze.forEach((ingredient) => {
    if (ingredients.includes(ingredient)) {
      darkSpiritsInBar.push(ingredient);
    }
  });

  Constants.clearBooze.forEach((ingredient) => {
    if (ingredients.includes(ingredient)) {
      lightSpiritsInBar.push(ingredient);
    }
  });

  Constants.mixers.forEach((ingredient) => {
    if (ingredients.includes(ingredient)) {
      moreMixersInBar.push(ingredient);
    }
  });

  Constants.fruitBooze.forEach((ingredient) => {
    if (ingredients.includes(ingredient)) {
      liquersEtcInBar.push(ingredient);
    }
  });

  Constants.produce.forEach((ingredient) => {
    if (ingredients.includes(ingredient)) {
      pantryAndProduceInBar.push(ingredient);
    }
  });

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
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader>MY BAR</MainHeader>
          <MyBarIngredientList ingredients={ingredients} />
         
          {/* {baseEssentials.options.length > 0 && (
            <ChecklistBox titleOptionsObject={baseEssentials} />
          )}
          {mixersEssentials.options.length > 0 && (
            <ChecklistBox titleOptionsObject={mixersEssentials} />
          )}
          {darkSpirits.options.length > 0 && (
            <ChecklistBox titleOptionsObject={darkSpirits} />
          )}
          {lightSpirits.options.length > 0 && (
            <ChecklistBox titleOptionsObject={lightSpirits} />
          )}
          {moreMixers.options.length > 0 && (
            <ChecklistBox titleOptionsObject={moreMixers} />
          )}
          {liquersEtc.options.length > 0 && (
            <ChecklistBox titleOptionsObject={liquersEtc} />
          )}
          {pantryAndProduce.options.length > 0 && (
            <ChecklistBox titleOptionsObject={pantryAndProduce} />
          )} */}

          <MyBarRecs />
          
        </ScrollView>
      </ImageBackground>
      <Footer />
    </>
  );
}

export default BarCartScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 60,
  },
  myBarIngredientsWrapper: {
    marginTop: 32,
  },
  myBarIngredient: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  myBarIngredientCopy: {
    flex: 1,
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
  },
  myBarIngredientIcon: {
    width: 12,
    height: 12,
  },
});
