import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import { GlobalStyles } from "../util/constants/globalStyles";
import MyBarIngredientList from "../components/bar-cart-components/MyBarIngredientList";
import MyBarRecs from "../components/bar-cart-components/MyBarRecs";
import { useNavigation } from "@react-navigation/native";

function BarCartScreen() {
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);
  const navigation = useNavigation();

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
          <View style={styles.divider}></View>
          <Pressable
            style={styles.availableDrinksBtn}
            onPress={() => {
              navigation.navigate("Drink List");
            }}
            android_ripple={{ color: GlobalStyles.colors.tonysPink300 }}
          >
            <Text style={styles.availableDrinksBtnCopy}>Available Drinks</Text>
          </Pressable>
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
  availableDrinksBtn: {
    backgroundColor: GlobalStyles.colors.robRoy100,
    borderColor: GlobalStyles.colors.robRoy100,
    borderWidth: 1,
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
