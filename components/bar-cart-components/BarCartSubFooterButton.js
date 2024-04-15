import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useState } from "react";
import { useDispatch} from "react-redux";

function BarCartSubFooterButton({ children }) {
  const [subFooterButtonSelected, setSubFooterButtonSelected] = useState(false);
  const dispatch = useDispatch();

  return (
    <Pressable
      style={[
        styles.barCartSubFooterButton,
        {
          backgroundColor: subFooterButtonSelected
            ? GlobalStyles.colors.tonysPink300
            : GlobalStyles.colors.towerGray600,
          borderColor: subFooterButtonSelected
            ? GlobalStyles.colors.towerGray600
            : GlobalStyles.colors.robRoy100,
        },
      ]}
      onPress={() =>{
        if (subFooterButtonSelected === true) {
          setSubFooterButtonSelected(false);
        } else {
          setSubFooterButtonSelected(true);

        }
      }}
    >
      <Text
        style={[
          styles.barCartSubFooterButtonText,
          {
            color: subFooterButtonSelected
              ? GlobalStyles.colors.lazyBlack
              : GlobalStyles.colors.robRoy100,
          },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export default BarCartSubFooterButton;

const styles = StyleSheet.create({
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
