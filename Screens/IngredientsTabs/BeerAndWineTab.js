import { ScrollView, StyleSheet, Text, View } from "react-native";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants/constants";

function BeerAndWineBoozeTab() {
  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Beer and Wine</Text>
      <View style={styles.IngredientContainer}>
        {Constants.beerWine.map((booze) => {
         return <IngredientCheckBox key={booze} ingredient={booze}>{booze}</IngredientCheckBox>
        })}
      </View>
    </ScrollView>
  );
}

export default BeerAndWineBoozeTab;

const styles = StyleSheet.create({
  IngredientContainer: {
    alignContent: "space-around",
    padding: 20,
  },
});
