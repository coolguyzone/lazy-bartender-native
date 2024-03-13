import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import CheckBox from "react-native-check-box";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  ingredientsArray,
} from "../../util/slices/inventorySlice";

function LightBoozeTab() {
  const ingredients = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  // dispatch(inventory.addIngredient('bourbon'))

  return (
    <ScrollView style = {styles.scrollView}>
      <Text style={styles.subHeaderText}>Light Booze</Text>
      <View style={styles.IngredientContainer}>
        {Constants.clearBooze.map((booze) => {
          return (
            <IngredientCheckBox key={booze} ingredient={booze}>
              {booze}
            </IngredientCheckBox>
          );
        })}
        {/* <Button
          title="test"
          onPress={() => {
            console.log("clicked");
            console.log("ingredients2", ingredients);
            return dispatch(addIngredient("bourbon"));
          }}
        ></Button>*/}
        <Text>WHat's up!!! {useSelector(ingredientsArray)}</Text> 
      </View>
    </ScrollView>
  );
}

export default LightBoozeTab;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#717171',
  },
  IngredientContainer: {
    backgroundColor: '#717171',
    alignContent: "space-around",
    padding: 20,
    borderTopWidth: 2,
    borderTopColor: 'white',
    marginTop: 6,
  },
  subHeaderText: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    backgroundColor: '#717171',
  }
});
