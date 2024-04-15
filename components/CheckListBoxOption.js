import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, removeIngredient } from "../util/slices/inventorySlice";

function ChecklistBoxOption({ option }) {
  const ingredientsArray = useSelector(
    (state) => state.inventory.ingredientsArray
  );
  //the conditional here makes sure items below the fold stay selected when the menu is closed and expanded again
  const [checkBoxSelected, setCheckBoxSelected] = useState(
    ingredientsArray.includes(option) ? true : false
  );
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);

  const longString = option.length > 12 ? true : false;
  const superLongString = option.length > 22 ? true : false;

  const styleObject = [
    styles.checklistOption,
    {
      backgroundColor: checkBoxSelected
        ? GlobalStyles.colors.tonysPink300
        : "transparent",
      borderColor: checkBoxSelected
        ? GlobalStyles.colors.towerGray600
        : GlobalStyles.colors.robRoy100,
      //TODO: this is redundant, remove superlongstring if it doesn't cause any issues
      flexBasis: longString ? (superLongString ? "55%" : "55%") : "30%",
    },
  ];

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.pressed, styleObject] : styleObject
      }
      onPress={() => {
        if (checkBoxSelected === true) {
          dispatch(removeIngredient(option));
          setCheckBoxSelected(false);
        } else {
          dispatch(addIngredient(option));
          setCheckBoxSelected(true);
        }
      }}
      android_ripple={{ color: GlobalStyles.colors.tonysPink300 }}
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
  pressed: {
    opacity: 0.75,
  },
});
