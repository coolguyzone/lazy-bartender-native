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
  console.log("addIngredient", addIngredient),
    console.log("ingredients", ingredients);

  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Light Booze</Text>
      <View style={styles.IngredientContainer}>
        {Constants.clearBooze.map((drink) => {
          return (
            <IngredientCheckBox key={drink} booze={drink}>
              {drink}
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
  IngredientContainer: {
    alignContent: "space-around",
    padding: 20,
  },
});
