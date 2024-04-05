import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";

function InstructionBlade({ drinkObj }) {
  return (
    <View style={styles.instructionBladeContainer}>
      <Text style={styles.instructionBladeTitleText}>Instructions</Text>
      <Text style={styles.instructionBladeStepText}>
        {drinkObj.instructions}
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
