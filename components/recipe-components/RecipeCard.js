import { View, Text, StyleSheet } from "react-native";

function RecipeCard({children}) {
  return <View style={styles.container}>
    <Text style={styles.label}>{children}</Text>
  </View>
}

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 12,
    paddingVertical: 12,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

