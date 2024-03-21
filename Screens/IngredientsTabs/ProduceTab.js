import { ScrollView, StyleSheet, Text, View } from "react-native";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants/constants";

function ProduceTab() {
  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Produce</Text>
      <View style={styles.IngredientContainer}>
        {Constants.produce.map((produce) => {
          return (
            <IngredientCheckBox key={produce} ingredient={produce}>
              {produce}
            </IngredientCheckBox>
          );
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
