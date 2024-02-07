import { useState } from "react";
import CheckBox from "react-native-check-box";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient, removeIngredient } from "../util/slices/inventorySlice";

function IngredientCheckBox(props) {
  const ingredients = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const [CheckBoxState, setCheckBoxState] = useState(false);
  return (
    <CheckBox
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
      leftText={props.children}
    />
  );
}

export default IngredientCheckBox;
