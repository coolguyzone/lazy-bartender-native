import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../util/constants/globalStyles";

function FeaturedDrinksSubBlade() {
  return (
    <>
    <View style={styles.FDBladeHeader}>
        <Text style={styles.FDBladeHeaderText}>Hot Girl Summer</Text>
        </View>
        <View style={styles.FDImageContainer}>
          <View style={styles.FDImageWrapper}>
          <Text>Drink Image 1</Text>
          </View>
       
          <View style={styles.FDImageWrapper}>
          <Text>Drink Image 2</Text>
          </View>
          </View>
          <View style={styles.divider}></View></>
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
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: 'space-between',
    
  },
  
  FDImageWrapper: {
    borderColor: 'white',
    borderWidth: 1,
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  divider: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
