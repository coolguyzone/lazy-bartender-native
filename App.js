import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
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
