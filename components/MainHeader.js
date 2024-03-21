import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from "../util/constants/globalStyles";


function MainHeader() {
  return  <View style={[styles.headerContainer, styles.centeredView]}>
  <Text style={styles.headerTitle}>LAZY BARTENDER</Text>
  <View style={styles.headerSearchBar}>

  <AntDesign name="search1" size={24} color={GlobalStyles.colors.robRoy100} />
  </View>
</View>
}

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 108,
    backgroundColor: GlobalStyles.colors.towerGray600,
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
    width: '100%',
    paddingLeft: 40,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})