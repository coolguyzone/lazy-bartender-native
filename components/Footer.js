import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Footer() {
  return (
    <View style={styles.siteFooterContainer}>
    <View style={styles.siteFooterOption}>
    <Text style={styles.siteFooterOptionIcon}>
    <Ionicons name="water" color={"blue"} size={14} />
      </Text>
      <Text style={styles.siteFooterOptionContent}>
        My Bar
      </Text>
    </View>
    <View style={styles.siteFooterOption}>
    <Text style={styles.siteFooterOptionIcon}>
    <Ionicons name="water" color={"blue"} size={14} />
      </Text>
      <Text style={styles.siteFooterOptionContent}>
        Drinks
      </Text>
    </View>
    <View style={styles.siteFooterOption}>
    <Text style={styles.siteFooterOptionIcon}>
    <Ionicons name="water" color={"blue"} size={14} />
      </Text>
      <Text style={styles.siteFooterOptionContent}>
        Favorites
      </Text>
    </View>
    <View style={styles.siteFooterOption}>
    <Text style={styles.siteFooterOptionIcon}>
    <Ionicons name="water" color={"blue"} size={14} />
      </Text>
      <Text style={styles.siteFooterOptionContent}>
        Saved
      </Text>
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
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 46,
  },
  siteFooterOption: {
    justifyContent: "center",
    alignItems: "center",
  }
});
