import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";

function InstructionsBlade({ children }) {
  return (
    <View style={[styles.instructionContainer, styles.centeredView]}>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
}

export default InstructionsBlade;

const styles = StyleSheet.create({
  instructionContainer: {
    paddingVertical: 20,
  },
  instructionText: {
    color: GlobalStyles.colors.robRoy100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
