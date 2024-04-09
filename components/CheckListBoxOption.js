import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import inventorySlice, {
  addIngredient,
  ingredientsArray,
  removeIngredient,
} from "../util/slices/inventorySlice";
import { Constants } from "../util/constants/constants";

let bgColor = "grey";

function ChecklistBoxOption({ option }) {
  //the conditional here makes sure items below the fold stay selected when the menu is closed and expanded again
  const [checkBoxSelected, setCheckBoxSelected] = useState(
    useSelector((state) => state.inventory.ingredientsArray).includes(option)
      ? true
      : false
  );
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);

  const longString = option.length > 12 ? true : false;
  const superLongString = option.length > 22 ? true : false;

  return (
    <Pressable
      style={[
        styles.checklistOption,
        {
          backgroundColor: checkBoxSelected
            ? GlobalStyles.colors.tonysPink300
            : "transparent",
          borderColor: checkBoxSelected
            ? GlobalStyles.colors.towerGray600
            : GlobalStyles.colors.robRoy100,
          flexBasis: longString ? (superLongString ? "100%" : "35%") : "30%",
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
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
