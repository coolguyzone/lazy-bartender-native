import { View, Text, StyleSheet, Image, Pressable, Platform } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../util/constants/constants";




function FeaturedDrinksSubBlade({title, featuredDrink1Name, featuredDrink2Name}) {
  const navigation = useNavigation();

  const drink1Object = Constants.drinkList.find((d) => d.name === featuredDrink1Name);
  const drink2Object = Constants.drinkList.find((d) => d.name === featuredDrink2Name);


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
        <Text style={styles.FDBladeHeaderText}>{title}</Text>
      </View>
      <View style={styles.FDImageContainer}>
        <Pressable style={[styles.FDImageWrapper, styles.boxShadow]} onPress={() => openFeaturedDrinkRecipe(featuredDrink1Name)}>
          <Image
            source={drink1Object.imageUrl}
            style={styles.FDImage}
          />
          <View style={styles.FDImageHeader}>
            <Text style={styles.FDImageHeaderText}>{featuredDrink1Name}</Text>
          </View>
        </Pressable>

        <Pressable style={[styles.FDImageWrapper, styles.boxShadow]} onPress={() => openFeaturedDrinkRecipe(featuredDrink2Name)}>
          <Image
            source={drink2Object.imageUrl}
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
