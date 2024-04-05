import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, removeIngredient } from "../util/slices/inventorySlice";

let bgColor = "grey";

function ChecklistBoxOption({ option }) {
  const [checkBoxSelected, setCheckBoxSelected] = useState(false);
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);

  return (
    <Pressable
      style={[
        styles.checklistOption,
        {
          backgroundColor: checkBoxSelected
            ? GlobalStyles.colors.tonysPink300
            : 'transparent',
          borderColor: checkBoxSelected
            ? GlobalStyles.colors.towerGray600
            : GlobalStyles.colors.robRoy100,
        },
      ]}
      onPress={() => {
        if (checkBoxSelected === true) {
          dispatch(removeIngredient(option));
          setCheckBoxSelected(false);          
        } else {
          dispatch(addIngredient(option));
          setCheckBoxSelected(true);
        }
      }}
    >
      <Text
        style={[
          styles.checklistOptionText,
          {
            color: checkBoxSelected
              ? GlobalStyles.colors.lazyBlack
              : GlobalStyles.colors.robRoy100,
          },
        ]}
      >
        {option}
      </Text>
    </Pressable>
  );
}

export default ChecklistBoxOption;

const styles = StyleSheet.create({
  checklistOption: {
    borderWidth: 1,
    width: 104,
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "30%",
  },
});
