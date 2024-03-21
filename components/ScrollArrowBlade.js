import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../util/constants/globalStyles";

function ScrollArrowBlade() {
  return (
    <View style={[styles.scrollArrowBlade, styles.centeredView]}>
      <Text style={styles.scrollArrowBladeText}>
        <Ionicons name="water" color={GlobalStyles.colors.robRoy100} size={34} />
      </Text>
    </View>
  );
}

export default ScrollArrowBlade;

const styles = StyleSheet.create({
  scrollArrowBlade: {
    height: 44,
    paddingTop: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ignItems: "center",
});
