import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ChecklistBoxOption from "./CheckListBoxOption";
import { GlobalStyles } from "../util/constants/globalStyles";




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
    padding: 10,
  },
  checklistHeaderWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
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
    color: GlobalStyles.colors.robRoy100,
  },
  checklistOptionContainer: {
    marginTop: 12,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 14,
  },
});
