import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Constants } from "../../util/constants/constants";
import { useNavigation } from "@react-navigation/native";
import { addFavorite, removeFavorite } from "../../util/slices/inventorySlice";

function DrinkCard({ drinkTitle }) {
  const navigation = useNavigation();
  function openDrinkRecipe() {
    const drink = Constants.drinkList.find((d) => d.name === drinkTitle);
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

  generateBoxShadowStyle(-2, 8, "black", 0.4, 2, 18, "black");

 

  const dispatch = useDispatch();
  const favoritesArray = useSelector(
    (state) => state.inventory.favoritesArray
  );
  const [favoritedState, setFavoritedState] = useState(favoritesArray.includes(drinkTitle) ? true : false);

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
    <Pressable style={[styles.drinkContainer, styles.boxShadow]} onPress={openDrinkRecipe}>
      <View style={styles.drinkIcon}>
        <Ionicons
          name="water"
          color={GlobalStyles.colors.robRoy100}
          size={34}
        />
      </View>
      <Text style={styles.drinkTitle}>{drinkTitle}</Text>
      <Text style={styles.drinkPercentage}>100%</Text>
      <Pressable onPress={toggleFavorite} style={styles.faveIcon}>
        <Ionicons
          name={favoritedState ? "star" : "star-outline"}
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </Pressable>
    </Pressable>
  );
}

export default DrinkCard;

const styles = StyleSheet.create({
  drinkContainer: {
    marginBottom: 20,
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
    marginTop: 6,
    flex: 1,
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
