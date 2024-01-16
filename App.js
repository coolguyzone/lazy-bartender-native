import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './Screens/HomeScreen';
import IngredientsScreen from './Screens/IngredientsScreen';
import RecipesScreen from './Screens/RecipesScreen';
import LightBoozeTab from './Screens/IngredientsTabs/LightBoozeTab';
import DarkBoozeTab from './Screens/IngredientsTabs/DarkBoozeTab';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function IngredientsTabNavigator() {
  return (
    <BottomTab.Navigator independent={true}>
    <BottomTab.Screen name="Light Booze" component={LightBoozeTab} />
    <BottomTab.Screen name="Dark Booze" component={DarkBoozeTab} />
  </BottomTab.Navigator>
  )
}



export default function App() {
  return (
    <>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
   <Drawer.Screen name="Home" component={HomeScreen} />
   <Drawer.Screen name="Ingredients" component={IngredientsTabNavigator} />
   <Drawer.Screen name="Recipes" component={RecipesScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
