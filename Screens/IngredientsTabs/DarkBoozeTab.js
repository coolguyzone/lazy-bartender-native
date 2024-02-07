import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CheckBox from "react-native-check-box";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants";


function DarkBoozeTab() {

  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Dark Booze</Text>
      <View style={styles.IngredientContainer}>
        {Constants.brownBooze.map((booze) => {
         return <IngredientCheckBox key={booze} ingredient={booze}>{booze}</IngredientCheckBox>
        })}
      </View>
    </ScrollView>
  );
}

export default DarkBoozeTab;

const styles = StyleSheet.create({
  IngredientContainer: {
    alignContent: "space-around",
    padding: 20,
  },
});
