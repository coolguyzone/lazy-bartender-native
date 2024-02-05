import { useState } from "react";
import CheckBox from "react-native-check-box";

function IngredientCheckBox({ children }) {
  const [CheckBoxState, setCheckBoxState] = useState(false);
  return (
    <CheckBox
      onClick={() =>
        CheckBoxState === true
          ? setCheckBoxState(false)
          : setCheckBoxState(true)
      }
      isChecked={CheckBoxState}
      leftText={children}
    />
  );
}

export default IngredientCheckBox;
