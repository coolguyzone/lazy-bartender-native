import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ChecklistBoxOption from "./CheckListBoxOption";
import { GlobalStyles } from "../util/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function ChecklistBox({ titleOptionsObject }) {
  const fullOptions = titleOptionsObject.options;
  const firstNineOptions = titleOptionsObject.options.slice(0,10);

  const [expanded, setExpanded] = useState(false);
  

  return (
    <View style={styles.checklistContainer}>
      <View style={styles.checklistHeaderWrapper}>
        <Text style={styles.checklistHeaderText}>
          {titleOptionsObject.title}
        </Text>
      </View>
      <View style={styles.checklistOptionContainer}>
        {expanded ? fullOptions.map((option) => {
          return <ChecklistBoxOption option={option} key={option} />;
        }) : firstNineOptions.map((option) => {
          return <ChecklistBoxOption option={option} key={option} />;
        })}
      </View>
      {titleOptionsObject.options.length > 10 && (
        <Pressable 
        onPress={() => {
          !expanded ? setExpanded(true) : setExpanded(false)
        }}
        style={styles.expandIcon}>
          <Ionicons
            name={expanded ? "chevron-up-outline" : "chevron-down-outline"}
            color={GlobalStyles.colors.robRoy100}
            size={30}
          />
        </Pressable>
      )}

      <View style={styles.divider}></View>
    </View>
  );
}

export default ChecklistBox;

const styles = StyleSheet.create({
  checklistContainer: {
    padding: 10,
  },
  checklistHeaderWrapper: {
    alignItems: 'center',
  },
  checklistHeaderText: {
    fontSize: 20,
    marginTop: 4,
    fontWeight: 'bold',
    color: GlobalStyles.colors.robRoy100,
  },
  checklistOptionContainer: {
    marginTop: 8,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 14,
  },
  divider: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginTop: 20,
  },
  expandIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
  },
});
