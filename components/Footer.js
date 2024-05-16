import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../util/constants/globalStyles";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

function Footer() {
  const navigation = useNavigation();
  const drinkList = useSelector((state) => state.inventory.drinksArray);
  const drinksAvailable = drinkList.length > 0 ? true : false;
  const route = useRoute();
  const isDrinkScreen = route.name === "Drink List" ? true : false;
  
  return (
    <View style={styles.siteFooterContainer}>
      <Pressable
        style={styles.siteFooterOption}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons
            name="home-outline"
            color={GlobalStyles.colors.robRoy100}
            size={14}
          />
        </Text>
        <Text style={styles.siteFooterOptionContent}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.siteFooterOption}
        onPress={() => navigation.navigate("Ingredients")}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons
            name="cart-outline"
            color={GlobalStyles.colors.robRoy100}
            size={14}
          />
        </Text>
        <Text style={styles.siteFooterOptionContent}>Ingredients</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Drink List")}
        style={[
          styles.siteFooterMainOption,
          {
            borderColor: drinksAvailable && !isDrinkScreen
              ? GlobalStyles.colors.robRoy100
              : GlobalStyles.colors.towerGray600,
            backgroundColor: isDrinkScreen
              ? GlobalStyles.colors.robRoy100
              : GlobalStyles.colors.footerGray,
          },
        ]}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons
            name="wine"
            color={
              isDrinkScreen
                ? GlobalStyles.colors.footerGray
                : GlobalStyles.colors.robRoy100
            }
            size={14}
          />
        </Text>
        <Text
          style={[
            styles.siteFooterOptionContent,
            {color:isDrinkScreen
              ? GlobalStyles.colors.footerGray
              : GlobalStyles.colors.robRoy100,}
          ]}
        >
          Drinks
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Bar Cart")}
        style={styles.siteFooterOption}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons
            name="business-outline"
            color={GlobalStyles.colors.robRoy100}
            size={14}
          />
        </Text>
        <Text style={styles.siteFooterOptionContent}>My Bar</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Favorites")}
        style={styles.siteFooterOption}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons
            name="beer-outline"
            color={GlobalStyles.colors.robRoy100}
            size={14}
          />
        </Text>
        <Text style={styles.siteFooterOptionContent}>Favorites</Text>
      </Pressable>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  siteFooterContainer: {
    paddingHorizontal: 4,
    paddingBottom: 4,
    height: 64,
    backgroundColor: GlobalStyles.colors.footerGray,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 1,
  },
  siteFooterOption: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  siteFooterMainOption: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.footerGray,
    borderRadius: 100,
    borderWidth: 4,
    flex: 1,
    marginTop: -28,
  },
  siteFooterOptionContent: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 10,
  },
  footerIcon: {
    color: GlobalStyles.colors.robRoy100,
    width: 24,
    height: 24,
  },
});
