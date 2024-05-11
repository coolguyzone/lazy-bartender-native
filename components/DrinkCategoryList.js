import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import FeaturedDrinksSubBlade from "./FeaturedDrinksSubBlade";
import DrinkCard from "./drink-list-components/DrinkCard";
import { Constants } from "../util/constants/constants";

function DrinkCategoryList({ category }) {
  const drinkList = Constants.drinkList;
  const filteredDrinkList = drinkList.filter((drink) => {
    return drink.ingredients.includes(category);
  });

  console.log("filter", filteredDrinkList);

  return (
    <View style={styles.drinkCategoryListContainer}>
      <View style={styles.drinkCategoryListHeader}>
        <Text style={styles.drinkCategoryListHeaderCopy}>Drinks with:</Text>
        <View style={styles.drinkCategoryListFauxBtn}>
          <Text style={styles.drinkCategoryListFauxBtnCopy}>{category}</Text>
        </View>
      </View>
      <View style={styles.drinkCategoryListDrinkCards}>
        {filteredDrinkList.map((drink) => {
          return <DrinkCard drinkTitle={drink.name} key={drink.name} />;
        })}
      </View>
    </View>
  );
}

export default DrinkCategoryList;

const styles = StyleSheet.create({
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
});
