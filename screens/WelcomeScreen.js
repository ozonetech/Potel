import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat/Montserrat-Black.ttf"),
    "Lato-Black": require("../assets/fonts/Lato/Lato-Black.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato/Lato-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const ScreenHeight = Dimensions.get("window").height;
  return (
    <LinearGradient
      colors={["#101111", "#16171b"]}
      style={styles.linearGradient}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.logoText}>
          <Image
            source={require("../assets/potellogoicon.png")}
            style={styles.logoimage}
          ></Image>
          <Text style={styles.potel}>POTEL</Text>
          <Text style={styles.liveAProductive1}>Live a Productive life</Text>
        </View>

        <View style={styles.lambcontainer}>
          <Image
            source={require("../assets/lamborange.png")}
            style={styles.lamborange}
          ></Image>
        </View>
        <View style={styles.hero}>
          <Text style={styles.heroText}>Welcome</Text>
          <Text style={styles.herosubtitle}>
            Know The Power Status With Potel
          </Text>
        </View>
        <View style={styles.nextButton2}>
          <LinearGradient
            style={styles.nextButton}
            colors={["#FBB040", "#FFF200"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <AntDesign
              style={styles.leftIcon}
              name="right"
              size={30}
              color="white"
            />
          </LinearGradient>
        </View>
        <StatusBar />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  hero: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    top: "-3%",
  },
  heroText: {
    fontSize: 70,
    letterSpacing: 1.4,
    fontFamily: "Lato-Black",
    color: "#fdfdfd",
    textAlign: "center",
    textShadowColor: "rgba(255, 255, 255, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 4,
  },
  herosubtitle: {
    fontSize: 22,
    fontFamily: "Lato-Regular",
    color: "#7f8489",
    textAlign: "center",
    width: 250,
    height: 58,
  },
  logoText: {
    top: 20,
  },
  logoimage: {
    alignSelf: "center",
    aspectRatio: 1,
    resizeMode: "contain",
    width: 20,
    height: "30%",
  },
  potel: {
    fontSize: 48,
    letterSpacing: 1,
    fontFamily: "Montserrat-Regular",
    color: "#fff",
    textAlign: "center",
  },
  liveAProductive1: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "#fff",
    textAlign: "center",
    top: -10,
  },
  lambcontainer: {
    position: "absolute",
  },
  lamborange: {
    left: "30%",
    height: 450,
    resizeMode: "contain",
  },
  nextButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    bottom: "-3%",
    elevation: 2,
    shadowColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton2: {
    width: 85,
    height: 85,
    borderRadius: 45,
    alignSelf: "center",
    bottom: "5%",
    elevation: 5,
    backgroundColor: "#a2790d",
  },
  nextButtonShadow: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 60,
    alignSelf: "center",
    bottom: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: -10,
    },
    leftIcon: {},
    shadowOpacity: 0.5,
    shadowRadius: 0,
  },
});
