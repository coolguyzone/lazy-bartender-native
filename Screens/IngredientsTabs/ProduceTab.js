import { ScrollView, StyleSheet, Text, View } from "react-native";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants";

function ProduceTab() {
  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Produce</Text>
      <View style={styles.IngredientContainer}>
        {Constants.produce.map((drink) => {
         return <IngredientCheckBox key={drink}>{drink}</IngredientCheckBox>
        })}
      </View>
    </ScrollView>
  );
}

export default ProduceTab;

const styles = StyleSheet.create({
  IngredientContainer: {
    alignContent: "space-around",
    padding: 20,
  },
});
