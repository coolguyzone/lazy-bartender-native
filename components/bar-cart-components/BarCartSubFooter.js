import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarCartSubFooterButton from "./BarCartSubFooterButton";

function BarCartSubFooter() {
  const [subFooterButtonSelected, setsubFooterButtonSelected] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.barCartSubFooterContainer}>
      <View style={styles.barCartSubFooterButtons}>
        <BarCartSubFooterButton>In My Bar</BarCartSubFooterButton>
        <BarCartSubFooterButton>Available Drinks</BarCartSubFooterButton>
      </View>
    </View>
  );
}

export default BarCartSubFooter;

const styles = StyleSheet.create({
  barCartSubFooterContainer: {
    backgroundColor: GlobalStyles.colors.footerGray,
    borderTopColor: GlobalStyles.colors.robRoy100,
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  barCartSubFooterButtons: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  barCartSubFooterButton: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: GlobalStyles.colors.robRoy100,
    flex: 1,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  barCartSubFooterButtonText: {
    color: GlobalStyles.colors.robRoy100,
  },
});
