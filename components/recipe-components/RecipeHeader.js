import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../util/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function RecipeHeader() {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.recipeHeaderContainer}>
      <Pressable  onPress={goBack}>
        <Text style={styles.recipeHeaderBackLink}>&lt; Back</Text>
      </Pressable>
      <View style={styles.recipeHeaderSpacer}></View>
      <View style={styles.recipeHeaderIcon}>
        <Ionicons
          name="share-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
      <View style={styles.recipeHeaderIcon}>
        <Ionicons
          name="folder-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
      <View style={styles.recipeHeaderIcon}>
        <Ionicons
          name="star-outline"
          color={GlobalStyles.colors.robRoy100}
          size={24}
        />
      </View>
    </View>
  );
}

export default RecipeHeader;

const styles = StyleSheet.create({
  recipeHeaderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 58,
    marginTop: 14,
  },
  recipeHeaderBackLink: {
    color: GlobalStyles.colors.robRoy100,
    marginTop: 6,
    fontSize: 18,
    flex: 0.5,
  },
  recipeHeaderSpacer: {
    flex: 1,
  },
  recipeHeaderIcon: {
    marginLeft: 12,
  },
});
