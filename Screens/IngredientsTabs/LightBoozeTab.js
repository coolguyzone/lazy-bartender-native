import { useState } from "react";
import { Text } from "react-native";
import CheckBox from "react-native-check-box";

function LightBoozeTab() {
  const [CheckBoxState, setCheckBoxState] = useState(false);

  return (
    <>
      <Text style={{ marginTop: 20 }}>Light Booze Tab</Text>
      <CheckBox
        style={{ flex: 1, padding: 10 }}
        onClick={() =>
          CheckBoxState === true
            ? setCheckBoxState(false)
            : setCheckBoxState(true)
        }
        isChecked={CheckBoxState}
        leftText={"CheckBox"}
      />
    </>
  );
}

export default LightBoozeTab;
