import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import Footer from "../components/Footer";
import { GlobalStyles } from "../util/constants/globalStyles";
import FeaturedDrinksBlade from "../components/FeaturedDrinksBlade";
import { useNavigation } from "@react-navigation/native";

export const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid
) => {
  if (Platform.OS === "ios") {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

function HomeScreen() {
  const navigation = useNavigation();
  function getStarted() {
    navigation.navigate("Ingredients");
  }

  generateBoxShadowStyle(-2, 8, "black", 0.4, 2, 6, "black");

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>The Lazy Bartender</Text>
          </View>
          <View style={styles.heroImageWrapper}>
            <Image
              source={require("../assets/images/bourbon-and-branch-cropped.png")}
              style={styles.heroImage}
            />
            <View style={styles.heroImageLabel}>
              <Text style={styles.heroImageLabelCopy}>DRINK OF THE WEEK</Text>
            </View>
            <View style={styles.heroImageDrinkName}>
              <Text style={styles.heroImageDrinkNameCopy}>The Manhattan</Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <Pressable
            style={[styles.startButton, styles.boxShadow]}
            onPress={getStarted}
          >
            <Text style={styles.startButtonText}>
              Start adding your ingredients!
            </Text>
          </Pressable>
          <View style={styles.divider}></View>
          <FeaturedDrinksBlade />
        </ScrollView>
      </ImageBackground>

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
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 60,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 34,
    fontWeight: "bold",
    color: GlobalStyles.colors.robRoy100,
  },
  heroImageWrapper: {
    height: 298,
    position: 'relative',
  },
  heroImage: {
    height: 298,
    width: 390,
  },
  heroImageLabel: {
    position: 'absolute',
    left: '8%',
    top: '5%',
    height: 28,
    width: '84%',
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.robRoy100,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  },
  heroImageLabelCopy: {
    fontSize: 24,
  },
  heroImageDrinkName: {
    position: 'absolute',
    left: '4%',
    bottom: '4%',
    height: 28,
    width: '50%',
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.tonysPink300,
    opacity: 0.8,
  },
  heroImageDrinkNameCopy: {
    fontSize: 24,
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
  startButtonText: {
    fontSize: 24,
    color: GlobalStyles.colors.robRoy100,
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: GlobalStyles.colors.robRoy100,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
