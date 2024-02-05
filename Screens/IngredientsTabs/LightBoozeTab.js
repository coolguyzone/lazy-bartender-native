import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "react-native-check-box";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants";

function LightBoozeTab() {
  return (
    <>
      <Text style={{ marginTop: 20 }}>Light Booze</Text>
      <View style={styles.IngredientContainer}>
        {Constants.clearDrinks.map((drink) => {
         return <IngredientCheckBox key={drink}>{drink}</IngredientCheckBox>
        })}
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
