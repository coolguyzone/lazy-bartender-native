import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GlobalStyles } from "../util/constants/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searchTextChanged } from "../util/slices/inventorySlice";



function MainHeader({ children, search = true }) {

  const drinkList = useSelector((state) => state.inventory.drinksArray);
  const [searchActive, setSearchActive] = useState(false);
  let searchResults = [];
  const dispatch = useDispatch();



  function searchTextChange(text) {
    // console.log('text changed!', searchResults);
    // searchResults = [];
    // searchDrinks(text);
    // if (text) {
    //   setSearchActive(true);
    // } else {
    //   setSearchActive(false);
    // }
    // console.log('searchActive', searchActive);
    dispatch(searchTextChanged(text))
  }

  function searchDrinks(input) {
    for (let i = 0; i < drinkList.length; i++) {
      if (drinkList[i].toLowerCase().includes(input.toLowerCase())) {
        searchResults.push(drinkList[i]);
      }
    }
    return searchResults;
  }

  return (
    <View style={[styles.headerContainer, styles.centeredView]}>
      <Text style={styles.headerTitle}>{children}</Text>
      {search && (
        <View style={styles.headerSearchBar}>
          <AntDesign
            name="search1"
            size={16}
            color={GlobalStyles.colors.robRoy100}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Drinks"
            placeholderTextColor={GlobalStyles.colors.robRoy100}
            onChangeText={(searchText) => searchTextChange(searchText)}
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
    backgroundColor: GlobalStyles.colors.footerGray,
    borderWidth: 1,
    borderRadius: 40,
    height: 36,
    width: "100%",
    paddingTop: 6,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    color: GlobalStyles.colors.robRoy100,
    marginBottom: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
