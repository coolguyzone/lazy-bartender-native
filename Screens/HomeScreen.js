import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function HomeScreen() {


  return (
    <>
    <View style={styles.centeredView}>
      <Text style={styles.title}>Lazy Bartender</Text>
      <View style={styles.welcomeTextWrapper}>
        <View style={styles.centeredView}>
          <Text style={styles.welcomeText}>
            Making the Best of what you got
          </Text>
        </View>
      </View>
      <Pressable style={styles.startButton}>
        <Text style={styles.startButtonText}>Let's get started!</Text>
      </Pressable>
    </View>
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
    marginTop: -80,
  },
  title: {
    marginBottom: 50,
    fontSize: 34,
    marginTop: 50,

  },
  welcomeTextWrapper: {
    backgroundColor: "grey",
    height: 387,
    width: 318,
    borderRadius: 400,
    paddingHorizontal: 30,
    paddingTop: 70,
  },
  welcomeText: {
    fontSize: 34,
    color: "black",
  },
  startButton: {
    backgroundColor:'grey',
    marginTop: 70,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  startButtonText: {
    fontSize: 24,
  }
});
