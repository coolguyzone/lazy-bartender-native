import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BarCartScreen from "../Screens/BarCartScreen";

function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.siteFooterContainer}>
      <Pressable
        onPress={() => navigation.navigate("Bar Cart")}
        style={styles.siteFooterOption}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons name="water" color={"blue"} size={14} />
        </Text>
        <Text style={styles.siteFooterOptionContent}>My Bar</Text>
      </Pressable>
      <Pressable
        style={styles.siteFooterOption}
        onPress={() => navigation.navigate("Recipes")}
      >
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons name="water" color={"blue"} size={14} />
        </Text>
        <Text style={styles.siteFooterOptionContent}>Drinks</Text>
      </Pressable>
      <View style={styles.siteFooterOption}>
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons name="water" color={"blue"} size={14} />
        </Text>
        <Text style={styles.siteFooterOptionContent}>Favorites</Text>
      </View>
      <View style={styles.siteFooterOption}>
        <Text style={styles.siteFooterOptionIcon}>
          <Ionicons name="water" color={"blue"} size={14} />
        </Text>
        <Text style={styles.siteFooterOptionContent}>Saved</Text>
      </View>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  siteFooterContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 46,
  },
  siteFooterOption: {
    justifyContent: "center",
    alignItems: "center",
  },
});
