import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import FeaturedDrinksSubBlade from "./FeaturedDrinksSubBlade";

function FeaturedDrinksBlade() {
  return (
    <View style={styles.FDBladeContainer}>
      <FeaturedDrinksSubBlade
        title="Hot Girl Summer"
        featuredDrink1Name="Aperol Spritz"
        featuredDrink2Name="Watermelon Daqueri"
      />
      <FeaturedDrinksSubBlade
        title="For the Future Senator"
        featuredDrink1Name="Gibson"
        featuredDrink2Name="Rum Martini"
      />
      <FeaturedDrinksSubBlade
        title="Night Nurse After a Double Shift"
        featuredDrink1Name="Negroni"
        featuredDrink2Name="Tailspin Cocktail"
      />
    </View>
  );
}

export default FeaturedDrinksBlade;

const styles = StyleSheet.create({
  FDBladeContainer: {},
});
