import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

function RecipeHeader() {
  return (
    <View style={styles.recipeHeaderContainer}>
      <Text style={styles.recipeHeaderBackLink}>&lt; Back</Text>
      <View style={styles.recipeHeaderIcon}>
        <Ionicons
          name="share-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
      <View style={styles.recipeHeaderIcon}>
        <Ionicons
          name="folder-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
      <View style={styles.recipeHeaderIcon}>
        <Ionicons
          name="star-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
    </View>
  );
}

export default RecipeHeader;

const styles = StyleSheet.create({
  recipeHeaderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 14,

    height: 58,
  },
  recipeHeaderBackLink: {
    color: GlobalStyles.colors.robRoy100,
    marginLeft: 10,
    marginRight: 170,
    marginTop: 6,
    fontSize: 18,
  },
  recipeHeaderIcon: {
    marginLeft: 12,
    marginTop: 5,
  },
});
