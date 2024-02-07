import { ScrollView, StyleSheet, Text, View } from "react-native";
import IngredientCheckBox from "../../components/IngredientCheckBox";
import { Constants } from "../../util/constants";

function MixersTab() {
  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Mixers</Text>
      <View style={styles.IngredientContainer}>
        {Constants.mixers.map((mixer) => {
         return <IngredientCheckBox key={mixer} ingredient={mixer}>{mixer}</IngredientCheckBox>
        })}
      </View>
    </ScrollView>
  );
}

export default  MixersTab;

const styles = StyleSheet.create({
  IngredientContainer: {
    alignContent: "space-around",
    padding: 20,
  },
});
