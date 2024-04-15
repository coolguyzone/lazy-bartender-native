import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../util/constants/constants";




function FeaturedDrinksSubBlade() {
  const navigation = useNavigation();
  const featuredDrink1Name = 'Aperol Spritz';
  featuredDrink2Name = 'Watermelon Daqueri';

  function openFeaturedDrinkRecipe(drinkTitle) {
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

  generateBoxShadowStyle(-2, 8, "black", 0.4, 2, 6, "black");


  return (
    <>
      <View style={styles.FDBladeHeader}>
        <Text style={styles.FDBladeHeaderText}>Hot Girl Summer</Text>
      </View>
      <View style={styles.FDImageContainer}>
        <Pressable style={[styles.FDImageWrapper, styles.boxShadow]} onPress={() => openFeaturedDrinkRecipe(featuredDrink1Name)}>
          <Image
            source={require("../assets/images/aperol-spritz.png")}
            style={styles.FDImage}
          />
          <View style={styles.FDImageHeader}>
            <Text style={styles.FDImageHeaderText}>{featuredDrink1Name}</Text>
          </View>
        </Pressable>

        <Pressable style={[styles.FDImageWrapper, styles.boxShadow]} onPress={() => openFeaturedDrinkRecipe(featuredDrink2Name)}>
          <Image
            source={require("../assets/images/watermelon-daqueri.png")}
            style={styles.FDImage}
          />
          <View style={styles.FDImageHeader}>
            <Text style={styles.FDImageHeaderText}>{featuredDrink2Name}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.divider}></View>
    </>
  );
}

export default FeaturedDrinksSubBlade;

const styles = StyleSheet.create({
  FDBladeHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  FDBladeHeaderText: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
  },
  FDImageContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  FDImageWrapper: {
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  FDImage: {
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  FDImageHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  FDImageHeaderText: {
    color: GlobalStyles.colors.robRoy100,
    fontWeight: 'bold',
    fontSize: 16,
  },
  divider: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
