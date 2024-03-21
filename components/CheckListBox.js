import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ChecklistBoxOption from "./CheckListBoxOption";




function ChecklistBox({titleOptionsObject}) {
  return (
    <View style={styles.checklistContainer}>
      <View style={styles.checklistHeaderWrapper}>
        <View style={styles.checklistHeaderIcon}></View>
        <Text style={styles.checklistHeaderText}>{titleOptionsObject.title}</Text>
      </View>
      <View style={styles.checklistOptionContainer}>
        {titleOptionsObject.options.map((option) => {
          return (
           <ChecklistBoxOption option={option} />
          );
        })}
      </View>
    </View>
  );
}

export default ChecklistBox;

const styles = StyleSheet.create({
  checklistContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
  },
  checklistHeaderWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checklistHeaderIcon: {
    backgroundColor: "green",
    height: 36,
    width: 36,
    marginRight: 12,
  },
  checklistHeaderText: {
    fontSize: 20,
    marginTop: 4,
  },
  checklistOptionContainer: {
    marginTop: 12,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 14,
  },
});
