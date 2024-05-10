import { ScrollView, StyleSheet, ImageBackground, Text } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import { GlobalStyles } from "../util/constants/globalStyles";
import DrinkCard from "../components/drink-list-components/DrinkCard";
import { useDispatch, useSelector } from "react-redux";
import { Constants } from "../util/constants/constants";

function DrinkListScreen({ searchResultText }) {
  const drinkList = useSelector((state) => state.inventory.drinksArray);
  const drinkSearchArray = useSelector(
    (state) => state.inventory.drinkSearchArray
  );
  const drinkSearchActive = useSelector(
    (state) => state.inventory.drinkSearchActive
  );

  // searchResultText && console.log("search result!");

  // const allDrinks = Constants.drinkList;

  // function test() {
  //   allDrinks.forEach((drink) => {
      
  //     let dupeArray = [];
  //     for (let i = 0; i < allDrinks.length; i++) {
        
  //       if (drink.name === allDrinks[i].name) {
  //         dupeArray.push(drink.name);
  //         if (dupeArray.length > 1) {
  //           console.log('duper', drink.name)
  //         }
  //        else {
  //         // console.log('dupearray', dupeArray)
  //       } }
  //     }

  //   })
  //   console.log('yo dawg')
  // }

  // test();

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader searchType='drinks'>My Drink List</MainHeader>
          <InstructionsBlade>
            {drinkSearchActive ? 'Search Results With Your Ingredients' : drinkList.length < 1 ? "You do not have enough ingredients for any drinks, try going to the 'ingredients' tab and adding some more!" : 'Drinks Available Woth Your Ingredients'}
          </InstructionsBlade>
          {drinkSearchActive
            ? drinkSearchArray.length > 0 ? drinkSearchArray.map((drink) => {
              return <DrinkCard drinkTitle={drink} key={drink} />;
            }) : <Text>No Results</Text>
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
