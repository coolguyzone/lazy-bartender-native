import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Image,
} from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Constants } from "../../util/constants/constants";
import { useNavigation } from "@react-navigation/native";
import { addFavorite, removeFavorite } from "../../util/slices/inventorySlice";

function DrinkCard({ drinkTitle }) {
  const ownedIngredientsArray = useSelector(
    (state) => state.inventory.ingredientsArray
  );
  const drink = Constants.drinkList.find((d) => d.name === drinkTitle);

  //calculate the percentage of ingredients you have for the drink
  const drinkIngredientsArray = drink.ingredients;
  const totalIngredients = drinkIngredientsArray.length;
  const ingredientsInInventory = drinkIngredientsArray.filter((ele) =>
    ownedIngredientsArray.includes(ele)
  ).length;
  const ingredientPercentage = Math.floor(
    (ingredientsInInventory / totalIngredients) * 100
  );

  const navigation = useNavigation();

  function openDrinkRecipe() {
    navigation.navigate("Recipe", {
      drink: drink,
    });
  }

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === "android") {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 2, "black", 0.4, 2, 18, "black");

  const dispatch = useDispatch();
  const favoritesArray = useSelector((state) => state.inventory.favoritesArray);
  const [favoritedState, setFavoritedState] = useState(
    favoritesArray.includes(drinkTitle) ? true : false
  );

  function toggleFavorite() {
    if (favoritesArray.indexOf(drinkTitle) < 0) {
      dispatch(addFavorite(drinkTitle));
      setFavoritedState(true);
    } else {
      dispatch(removeFavorite(drinkTitle));
      setFavoritedState(false);
    }
  }

  return (
    <Pressable
      style={[styles.drinkContainer, styles.boxShadow]}
      onPress={openDrinkRecipe}
    >
      <View style={styles.drinkIcon}>
        <View style={styles.ikconContainer}>
          <Image
            source={
              drink.imageUrl
                ? drink.imageUrl
                : require("../../assets/images/icons/icon-drink.png")
            }
            style={styles.icon}
          />
        </View>
      </View>
      <Text style={styles.drinkTitle}>{drinkTitle}</Text>
      <Text style={styles.drinkPercentage}>{ingredientPercentage + "%"}</Text>
      <Pressable onPress={toggleFavorite} style={styles.faveIcon}>
        <Image
          source={
            favoritedState
              ? require("../../assets/images/icons/icon-star-filled.png")
              : require("../../assets/images/icons/icon-star.png")
          }
          style={styles.faveIcon}
        />
      </Pressable>
    </Pressable>
  );
}

export default DrinkCard;

const styles = StyleSheet.create({
  drinkContainer: {
    marginBottom: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(98, 143, 149, 0.5)",
    height: 54,
    borderRadius: 5,
    padding: 8,
  },
  drinkIcon: {
    flex: 0.15,
  },
  drinkTitle: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    marginTop: 10,
    marginLeft: 12,
    flex: 1,
  },
  drinkPercentage: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
    marginTop: 11,
  },
  faveIcon: {
    marginLeft: 12,
    marginTop: 5,
  },
  icon: {
    width: 34,
    height: 32,
  },
  faveIcon: {
    width: 30,
    height: 28,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 1,
  },
});
