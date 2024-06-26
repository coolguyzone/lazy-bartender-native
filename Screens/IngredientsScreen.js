import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import ChecklistBox from "../components/CheckListBox";
import { Constants } from "../util/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../util/constants/globalStyles";
import IngredientSearchResult from "../components/IngredientSearchResult";

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
  const ingredientSearchArray = useSelector(
    (state) => state.inventory.ingredientSearchArray
  );
  const ingredientSearchActive = useSelector(
    (state) => state.inventory.ingredientSearchActive
  );

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader>Ingredients</MainHeader>
          {ingredientSearchActive ? (
            <>
              <View style={styles.ingredientSearchContainer}>
                {ingredientSearchArray.map((ingredient) => {
                  return <IngredientSearchResult ingredientName={ingredient} />;
                })}
              </View>
            </>
          ) : (
            <>
              <ChecklistBox titleOptionsObject={baseEssentials} />
              <ChecklistBox titleOptionsObject={mixersEssentials} />
              <ChecklistBox titleOptionsObject={darkSpirits} />
              <ChecklistBox titleOptionsObject={lightSpirits} />
              <ChecklistBox titleOptionsObject={moreMixers} />
              <ChecklistBox titleOptionsObject={liquersEtc} />
              <ChecklistBox titleOptionsObject={pantryAndProduce} />
            </>
          )}
        </ScrollView>
      </ImageBackground>
      <Footer />
    </>
  );
}

export default IngredientsScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 60,
  },
});
