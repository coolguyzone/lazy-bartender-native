import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

function DrinkCard() {
  return (
    <Pressable style={styles.drinkContainer}>
      <View style={styles.drinkIcon}>
        <Ionicons
          name="water"
          color={GlobalStyles.colors.robRoy100}
          size={34}
        />
      </View>
      <Text style={styles.drinkTitle}>Manhattan</Text>
      <Text style={styles.drinkPercentage}>100%</Text>
      <View style={styles.faveIcon}>
        <Ionicons
          name="star-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
      <View style={styles.faveIcon}>
        <Ionicons
          name="folder-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
    </Pressable>
  );
}

export default DrinkCard;

const styles = StyleSheet.create({
  drinkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: GlobalStyles.colors.towerGray500,
    widht: 356,
    height: 54,
    borderRadius: 5,
    padding: 8,
  },
  drinkTitle: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    marginTop: 6,
    marginLeft: 4,
    width: 210,
  },
  drinkPercentage: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
    marginTop: 8,
  },
  faveIcon: {
    marginLeft: 12,
    marginTop: 5,
  },
});
