import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../util/constants/globalStyles";

function Footer() {
  const navigation = useNavigation();

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
        onPress={() => navigation.navigate("Drink List")}
        style={styles.siteFooterOption}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons
            name="water"
            color={GlobalStyles.colors.robRoy100}
            size={14}
          />
        </Text>
        <Text style={styles.siteFooterOptionContent}>Drinks</Text>
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
    paddingHorizontal: 30,
    paddingBottom: 4,
    height: 64,
    backgroundColor: GlobalStyles.colors.footerGray,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
  },
  siteFooterOption: {
    justifyContent: "center",
    alignItems: "center",
  },
  siteFooterOptionContent: {
    color: GlobalStyles.colors.robRoy100,
  },
});
