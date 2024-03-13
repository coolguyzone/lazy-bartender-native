import { useState } from "react";
import CheckBox from "react-native-check-box";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient, removeIngredient } from "../util/slices/inventorySlice";
import { StyleSheet, Text } from "react-native";

function IngredientCheckBox(props) {
  const ingredients = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const [CheckBoxState, setCheckBoxState] = useState(false);
  return (
    <CheckBox
      tintColor={"#FFFFFF"}
      onTintColor={"#FFFFFF"}
      onFillColor={"#FFFFFF"}
      onCheckColor={"#FFFFFF"}
      tintColors={{ true: '#FFFFFF' }}
      style={styles.checkbox}
      onClick={() =>
        // CheckBoxState === true
        //   ? setCheckBoxState(false)
        //   : setCheckBoxState(true)
        {
          if (CheckBoxState === true) {
            setCheckBoxState(false);
            dispatch(removeIngredient(props.ingredient));
          } else {
            setCheckBoxState(true);
            dispatch(addIngredient(props.ingredient));
          }
        }
      }
      isChecked={CheckBoxState}
      leftText={<Text style={{ color: "white" }}>{props.children}</Text>}
    />
  );
}

export default IngredientCheckBox;

const styles = StyleSheet.create({
  checkbox: {
    borderColor: "#FFFFFF",
  },
});
