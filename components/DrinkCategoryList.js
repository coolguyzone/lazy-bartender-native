import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../util/constants/globalStyles";
import FeaturedDrinksSubBlade from "./FeaturedDrinksSubBlade";
import DrinkCard from "./drink-list-components/DrinkCard";
import { Constants } from "../util/constants/constants";
import { useState } from "react";

function DrinkCategoryList({ category }) {
  const [expanded, setExpanded] = useState(false);
  const drinkList = Constants.drinkList;
  const filteredDrinkList = [];

  drinkList.forEach((drink) => {
    let include = false;
    drink.ingredients.forEach((ele) => {
      if (ele.includes(category)) {
        include = true;
      }
    })
    if (include) {
      filteredDrinkList.push(drink)
    }
  })
  
  // drinkList.filter((drink) => {
  //   // return drink.ingredients.includes(category);
  //   return drinkList.filter((drink) => ele.includes(category))
  // });
  const firstThreeOptions = filteredDrinkList.slice(0, 3);


  return (
    <View style={styles.drinkCategoryListContainer}>
      <View style={styles.drinkCategoryListHeader}>
        <Text style={styles.drinkCategoryListHeaderCopy}>Drinks with:</Text>
        <View style={styles.drinkCategoryListFauxBtn}>
          <Text style={styles.drinkCategoryListFauxBtnCopy}>{category}</Text>
        </View>
      </View>
      <View style={styles.drinkCategoryListDrinkCards}>
        {expanded ? filteredDrinkList.map((drink) => {
          return <DrinkCard drinkTitle={drink.name} key={drink.name} />;
        }) : firstThreeOptions.map((drink) => {
          return <DrinkCard drinkTitle={drink.name} key={drink.name} />;
        })}
      </View>
      {filteredDrinkList.length > 3 && (
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
    </View>
  );
}

export default DrinkCategoryList;

const styles = StyleSheet.create({
  drinkCategoryListContainer: {
    marginBottom: 30,
  },
  drinkCategoryListHeader: {
    height: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  drinkCategoryListHeaderCopy: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    width: "30%",
  },
  drinkCategoryListFauxBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.robRoy100,
    paddingVertical: 10,
    marginLeft: 20,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  drinkCategoryListFauxBtnCopy: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    fontWeight: "bold",
  },
  expandIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
