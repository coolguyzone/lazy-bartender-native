import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import InstructionsBlade from "../components/InstructionsBlade";
import ChecklistBox from "../components/CheckListBox";
import { baseEssentials, mixersEssentials } from "./BarCartScreen";
import { GlobalStyles } from "../util/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import DrinkCard from "../components/drink-list-components/DrinkCard";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

function DrinkListScreen() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.inventory.ingredientsArray);
  const drinkList = useSelector((state) => state.inventory.drinksArray);

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#468891", "#125e6e"]}
          style={styles.background}
        >
          <MainHeader>My Drink List</MainHeader>
          <InstructionsBlade>
            Drinks available with your pantry
          </InstructionsBlade>
          {drinkList.map((drink) => {
            return <DrinkCard drinkTitle={drink} />;
          })}
          {drinkList.length < 8 && (
            <View
              style={
                drinkList.length < 4 ? styles.bigSpacer : styles.smallSpacer
              }
            ></View>
          )}
        </LinearGradient>
      </ScrollView>
      <Footer />
    </>
  );
}

export default DrinkListScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  scrollView: {},
  drinkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: GlobalStyles.colors.towerGray500,
    widht: 356,
    height: 54,
    borderRadius: 5,
    padding: 8,
  },
  drinkTitle: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 18,
    marginTop: 6,
    marginLeft: 4,
    width: 210,
  },
  drinkPercentage: {
    color: GlobalStyles.colors.robRoy100,
    fontSize: 14,
    marginTop: 8,
  },
  faveIcon: {
    marginLeft: 12,
    marginTop: 5,
  },
  bigSpacer: {
    height: 600,
  },
  smallSpacer: {
    height: 300,
  },
});
