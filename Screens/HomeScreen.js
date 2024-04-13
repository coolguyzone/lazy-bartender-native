import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../util/constants/globalStyles";
import FeaturedDrinksBlade from "../components/FeaturedDrinksBlade";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {

  const navigation = useNavigation();
  function getStarted() {
    navigation.navigate("Ingredients")
  }

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {
    if (Platform.OS === 'ios') {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };


  generateBoxShadowStyle(-2, 8, 'black', 0.4, 2, 6, 'black');

  return (
    <>
     
        <LinearGradient
          // Background Linear Gradient
          colors={["#468891", "#125e6e"]}
          style={styles.background}
        >
           <ScrollView style={styles.scrollView}>
            <View style={styles.titleContainer}>
          <Text style={styles.title}>The Lazy Bartender</Text>
          </View>
          <View style={styles.heroImageWrapper}>
            <View style={styles.centeredView}>
              <Text style={styles.welcomeText}>
                Making the Best of what you got
              </Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <Pressable style={[styles.startButton, styles.boxShadow]} onPress={getStarted}>
            <Text style={styles.startButtonText}>Start adding your ingredients!</Text>
          </Pressable>
          <View style={styles.divider}></View>
          <FeaturedDrinksBlade />
          </ScrollView>
        </LinearGradient>
     
      <Footer />
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -160,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 34,
    fongWeight: 'bold',
    color: GlobalStyles.colors.robRoy100,
  },
  heroImageWrapper: {
    borderColor: 'white',
    borderWidth: 1,
    height: 298,
  },
  welcomeText: {
    fontSize: 34,
    color: "black",
  },
  startButton: {
    marginTop: 10,
    paddingVertical: 10,
    borderColor: GlobalStyles.colors.robRoy100,
    backgroundColor: GlobalStyles.colors.towerGray600,
    borderWidth: 1,
    borderRadius: 5,
    height: 90,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  elevation: {
    elevation: 20,
    shadowColor: 'black',
  },
  startButtonText: {
    fontSize: 24,
    color: GlobalStyles.colors.robRoy100,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 60,
  },
  divider: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
