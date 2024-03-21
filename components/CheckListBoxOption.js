import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

let bgColor = 'grey';

function ChecklistBoxOption({ option }) {
  const [checkBoxSelected, setCheckBoxSelected] = useState(false);

  return (
    <Pressable style={[styles.checklistOption, {backgroundColor : checkBoxSelected ? 'darkgrey' : 'lightgrey'} ]}
      onPress={
        () => {
          if (checkBoxSelected === true) {
            setCheckBoxSelected(false);
          } else {
            setCheckBoxSelected(true);
          }
        }
      } 
    >
      <Text style={styles.checklistOptionText}>{option}</Text>
    </Pressable>
  );
}

export default ChecklistBoxOption;

const styles = StyleSheet.create({
  checklistOption: {
    width: 104,
    height: 36,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "30%",
  },
});
