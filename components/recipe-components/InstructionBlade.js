import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";

function InstructionBlade() {
  return (
    <View style={styles.instructionBladeContainer}>
      <Text style={styles.instructionBladeTitleText}>Instructions</Text>
      <Text style={styles.instructionBladeStepText}>
        1. Add the rye whiskey, sweet vermouth, and bitters into a mixing glass
        with ice and stir until well chilled.
      </Text>
      <Text style={styles.instructionBladeStepText}>
        2. Strain into a chilled Nick & Nora or coupe glass.
      </Text>
      <Text style={styles.instructionBladeStepText}>
        3. Garnish with a brandied cherry (or a lemon twist, if preffered).
      </Text>
    </View>
  );
}

export default InstructionBlade;

const styles = StyleSheet.create({
  instructionBladeContainer: {
    paddingHorizontal: 24,
  },
  instructionBladeTitleText: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
  },
  instructionBladeStepText: {
    color: GlobalStyles.colors.robRoy100,
    marginLeft: 8,
  },
});
