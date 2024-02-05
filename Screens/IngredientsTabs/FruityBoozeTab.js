import { ScrollView, StyleSheet, Text, View } from "react-native";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants";

function FruityBoozeTab() {
  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Fruity Booze</Text>
      <View style={styles.IngredientContainer}>
        {Constants.fruitDrinks.map((drink) => {
         return <IngredientCheckBox key={drink}>{drink}</IngredientCheckBox>
        })}
      </View>
    </ScrollView>
  );
}

export default FruityBoozeTab;

const styles = StyleSheet.create({
  IngredientContainer: {
    alignContent: "space-around",
    padding: 20,
  },
});
