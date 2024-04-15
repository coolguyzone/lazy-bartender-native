import { ScrollView, StyleSheet, ImageBackground } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import { GlobalStyles } from "../util/constants/globalStyles";
import DrinkCard from "../components/drink-list-components/DrinkCard";
import { useDispatch, useSelector } from "react-redux";

function FavoritesScreen() {
  const favoritesList = useSelector((state) => state.inventory.favoritesArray);

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader>Favorites</MainHeader>
          <InstructionsBlade>
            Drinks available with your pantry
          </InstructionsBlade>
          {favoritesList.map((drink) => {
            return <DrinkCard drinkTitle={drink} key={drink} />;
          })}
        </ScrollView>
      </ImageBackground>
      <Footer />
    </>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 60,
  },
});
