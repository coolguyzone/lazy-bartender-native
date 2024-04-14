import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import RecipesScreen from "./Screens/OldRecipesScreen";
import LightBoozeTab from "./Screens/IngredientsTabs/LightBoozeTab";
import DarkBoozeTab from "./Screens/IngredientsTabs/DarkBoozeTab";
import FruityBoozeTab from "./Screens/IngredientsTabs/FruityBoozeTab";
import BeerAndWineBoozeTab from "./Screens/IngredientsTabs/BeerAndWineTab";
import MixersTab from "./Screens/IngredientsTabs/MixersTab";
import ProduceTab from "./Screens/IngredientsTabs/ProduceTab";
import { Ionicons } from "@expo/vector-icons";
import store from "./src/app/store";
import { Provider } from "react-redux";
import BarCartScreen from "./Screens/BarCartScreen";
import IngredientsScreen from "./Screens/IngredientsScreen";
import DrinkListScreen from "./Screens/DrinkListScreen";
import RecipeScreen from "./Screens/RecipeScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ingredients"
            component={IngredientsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Drink List"
            component={DrinkListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recipes"
            component={RecipesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bar Cart"
            component={BarCartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
