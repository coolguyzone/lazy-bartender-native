import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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
  console.log('addIngredient', addIngredient),
  console.log('ingredients', ingredients)



  return (
    <>
      <Text style={{ marginTop: 20 }}>Light Booze</Text>
      <View style={styles.IngredientContainer}>
        {Constants.clearDrinks.map((drink) => {
          return <IngredientCheckBox key={drink}>{drink}</IngredientCheckBox>;
        })}
        <Button
          title="test"
          onPress={() => {
            console.log("clicked");
            console.log('ingredients2', ingredients)
            return dispatch(addIngredient("bourbon"));
          }}
        ></Button>
        <Text>WHat's up!!! {useSelector(ingredientsArray)}</Text>
      </View>
    </>
  );
}

export default LightBoozeTab;

const styles = StyleSheet.create({
  IngredientContainer: {
    alignContent: "space-around",
    padding: 20,
  },
});
