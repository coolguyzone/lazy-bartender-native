import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';


function InstructionsBlade({children}) {
  return  <View style={[styles.instructionContainer, styles.centeredView]}>
  <Text style={styles.instructionText}>
    {children}
  </Text>
</View>
}

export default InstructionsBlade;

const styles = StyleSheet.create({
  instructionContainer: {
    backgroundColor: "white",
    paddingVertical: 20,
  },
  instructionText: {},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})