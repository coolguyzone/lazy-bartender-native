import { ImageBackground, ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import { GlobalStyles } from "../util/constants/globalStyles";
import MyBarIngredientList from "../components/bar-cart-components/MyBarIngredientList";
import MyBarRecs from "../components/bar-cart-components/MyBarRecs";

function BarCartScreen() {
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);
  ;

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader>MY BAR</MainHeader>
          <MyBarIngredientList ingredients={ingredients} />
          <View style={styles.divider}></View>

          <MyBarRecs />
          
        </ScrollView>
      </ImageBackground>
      <Footer />
    </>
  );
}

export default BarCartScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 60,
  },
  myBarIngredientsWrapper: {
    marginTop: 32,
  },
  myBarIngredient: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  myBarIngredientCopy: {
    flex: 1,
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
  },
  myBarIngredientIcon: {
    width: 12,
    height: 12,
  },
  divider: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
