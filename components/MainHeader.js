import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { GlobalStyles } from "../util/constants/globalStyles";

function MainHeader({ children, search = true }) {
  return (
    <View style={[styles.headerContainer, styles.centeredView]}>
      <Text style={styles.headerTitle}>{children}</Text>
      {search && (
        <View style={styles.headerSearchBar}>
          <AntDesign
            name="search1"
            size={20}
            color={GlobalStyles.colors.robRoy100}
          />
        </View>
      )}
    </View>
  );
}

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 108,
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: GlobalStyles.colors.robRoy100,
  },
  headerSearchBar: {
    borderColor: GlobalStyles.colors.robRoy100,
    borderWidth: 1,
    borderRadius: 40,
    height: 36,
    width: "100%",
    paddingTop: 6,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
