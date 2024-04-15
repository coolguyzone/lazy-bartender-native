import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import FeaturedDrinksSubBlade from "./FeaturedDrinksSubBlade";

function FeaturedDrinksBlade() {
  return (
    <View style={styles.FDBladeContainer}>
      <FeaturedDrinksSubBlade />
      <FeaturedDrinksSubBlade />
      <FeaturedDrinksSubBlade />
      <FeaturedDrinksSubBlade />
    </View>
  );
}

export default FeaturedDrinksBlade;

const styles = StyleSheet.create({
  FDBladeContainer: {},
});
