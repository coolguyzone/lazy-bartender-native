import { ScrollView, StyleSheet, ImageBackground, Text, View} from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import { GlobalStyles } from "../util/constants/globalStyles";
import DrinkCard from "../components/drink-list-components/DrinkCard";
import { useDispatch, useSelector } from "react-redux";
import { Constants } from "../util/constants/constants";
import DrinkCategoryList from "../components/DrinkCategoryList";

function DrinkListScreen({ searchResultText }) {
  const drinkList = useSelector((state) => state.inventory.drinksArray);
  const drinkSearchArray = useSelector(
    (state) => state.inventory.drinkSearchArray
  );
  const drinkSearchActive = useSelector(
    (state) => state.inventory.drinkSearchActive
  );

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <MainHeader searchType="drinks">My Drink List</MainHeader>
          <InstructionsBlade>
            {drinkSearchActive
              ? "Search Results With Your Ingredients"
              : drinkList.length < 1
              ? "You do not have enough ingredients for any drinks, try going to the 'ingredients' tab and adding some more!"
              : "Drinks Available Woth Your Ingredients"}
          </InstructionsBlade>
          {drinkSearchActive ? (
            drinkSearchArray.length > 0 ? (
              drinkSearchArray.map((drink) => {
                return <DrinkCard drinkTitle={drink} key={drink} />;
              })
            ) : (
              <Text>No Results</Text>
            )
          ) : (
            drinkList.map((drink) => {
              return (
              
                  <DrinkCard drinkTitle={drink} key={drink} />
                
              );
            }) 
          )}
          <View style={styles.divider}></View>
         <DrinkCategoryList category="Bourbon" />
         <DrinkCategoryList category="Rum" />
         <DrinkCategoryList category="Vodka" />
         <DrinkCategoryList category="Tequila" />
         <DrinkCategoryList category="Gin" />
         <DrinkCategoryList category="Whiskey" />
         <DrinkCategoryList category="Scotch" />
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
    paddingBottom: 30,
  },
  divider: {
    borderColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginTop: 4,
    marginBottom: 20,
  },
  drinkCategoryListHeader: {
    height: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  drinkCategoryListHeaderCopy: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    width: '30%',

  },
  drinkCategoryListFauxBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.robRoy100,
    paddingVertical: 10,
    marginLeft: 20,
    width: '60%',
    justifyContent: "center",
    alignItems: "center",

  },
  drinkCategoryListFauxBtnCopy: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
