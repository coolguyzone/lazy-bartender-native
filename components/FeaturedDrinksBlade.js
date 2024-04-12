import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";

function FeaturedDrinksBlade() {
  return (
    <View style={styles.FDBladeContainer}>
      <View style={styles.FDBladeHeader}>
        <Text style={styles.FDBladeHeaderText}>Hot Girl Summer</Text>
      </View>
    </View>
  );
}

export default FeaturedDrinksBlade;

const styles = StyleSheet.create({
  FDBladeContainer: {
    paddingHorizontal: 24,
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
  }
});
