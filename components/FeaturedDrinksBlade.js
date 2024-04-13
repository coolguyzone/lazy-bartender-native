import { View, Text, StyleSheet } from "react-native";
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
  FDBladeContainer: {
  },
  FDBladeHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  FDBladeHeaderText: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
  },
  FDImageContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: 'space-between',
    
  },
  
  FDImageWrapper: {
    borderColor: 'white',
    borderWidth: 1,
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  divider: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
