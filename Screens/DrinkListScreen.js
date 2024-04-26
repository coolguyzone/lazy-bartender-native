import { ScrollView, StyleSheet, ImageBackground, Text } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import { GlobalStyles } from "../util/constants/globalStyles";
import DrinkCard from "../components/drink-list-components/DrinkCard";
import { useDispatch, useSelector } from "react-redux";

function DrinkListScreen({ searchResultText }) {
  const drinkList = useSelector((state) => state.inventory.drinksArray);
  const drinkSearchArray = useSelector(
    (state) => state.inventory.drinkSearchArray
  );
  const drinkSearchActive = useSelector(
    (state) => state.inventory.drinkSearchActive
  );

  searchResultText && console.log("search result!");

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader>My Drink List</MainHeader>
          <InstructionsBlade>
            {drinkSearchActive ? 'Search Results With Your Ingredients' : 'Drinks Available WIth Your Ingredients'}
          </InstructionsBlade>
          {drinkSearchActive
            ? drinkSearchArray.map((drink) => {
                return <DrinkCard drinkTitle={drink} key={drink} />;
              })
            : drinkList.map((drink) => {
                return <DrinkCard drinkTitle={drink} key={drink} />;
              })}
        </ScrollView>
      </ImageBackground>
      <Footer />
    </>
  );
}

export default DrinkListScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 60,
  },
});
