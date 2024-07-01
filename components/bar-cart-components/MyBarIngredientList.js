import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function MyBarIngredientList({ ingredients }) {
  const firstElevenIngredients = ingredients.slice(0, 11);
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.myBarIngredientsWrapper}>
      {expanded
        ? ingredients.map((ele) => {
            return (
              <View style={styles.myBarIngredient} key={ele}>
                <Text style={styles.myBarIngredientCopy}>{ele}</Text>
                <View>
                  <Image
                    source={require("../../assets/images/icons/icon-drink.png")}
                    style={styles.myBarIngredientIcon}
                  />
                </View>
              </View>
            );
          })
        : firstElevenIngredients.map((ele) => {
            return (
              <View style={styles.myBarIngredient} key={ele}>
                <Text style={styles.myBarIngredientCopy}>{ele}</Text>
                <View style={styles.myBarIngredientIconContainer}>
                  <Image
                    source={require("../../assets/images/icons/icon-drink.png")}
                    style={styles.myBarIngredientIcon}
                  />
                  <Image
                    source={require("../../assets/images/icons/icon-trash.jpg")}
                    style={styles.myBarIngredientIcon}
                  />
                </View>
              </View>
            );
          })}
      {ingredients.length > 11 && (
        <Pressable
          onPress={() => {
            !expanded ? setExpanded(true) : setExpanded(false);
          }}
          style={styles.expandIcon}
        >
          <Ionicons
            name={expanded ? "chevron-up-outline" : "chevron-down-outline"}
            color={GlobalStyles.colors.robRoy100}
            size={30}
          />
        </Pressable>
      )}
    </View>
  );
}

export default MyBarIngredientList;

const styles = StyleSheet.create({
  myBarIngredientsWrapper: {
    marginTop: 32,
  },
  myBarIngredient: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  myBarIngredientCopy: {
    flex: 1,
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
  },
  myBarIngredientIconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  myBarIngredientIcon: {
    width: 12,
    height: 12,
  },
  expandIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
