import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import RecipesScreen from "./Screens/RecipesScreen";
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

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function IngredientsTabNavigator() {
  return (
    <BottomTab.Navigator independent={true}>
      <BottomTab.Screen
        name="Light Booze"
        component={LightBoozeTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wine" color={"black"} size={size} />
          ),
          tabBarStyle: { backgroundColor: "#717171"},
          tabBarLabelStyle: { color: 'white'}
        }}
      />
      <BottomTab.Screen
        name="Dark Booze"
        component={DarkBoozeTab}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="wine" color={"brown"} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Fruity Booze"
        component={FruityBoozeTab}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="wine" color={"red"} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Beer and Wine"
        component={BeerAndWineBoozeTab}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="wine" color={"goldenrod"} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Mixers"
        component={MixersTab}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="water" color={"blue"} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Produce"
        component={ProduceTab}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="nutrition" color={"orange"} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen
            name="Ingredients"
            component={IngredientsScreen}
          />
          <Drawer.Screen name="Recipes" component={RecipesScreen} />
          <Drawer.Screen
            name="Bar Cart"
            component={BarCartScreen}
          />
        </Drawer.Navigator>
       
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
