import * as React from "react";
import { useCallback } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import NextButton from "../components/nextButton";

SplashScreen.preventAutoHideAsync();

const SplashFivth = ({ navigation }) => {
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
  return (
    <View style={styles.splash} onLayout={onLayoutRootView}>
      <LinearGradient
        style={styles.bg1}
        locations={[0, 1]}
        colors={["#101111", "#16171b"]}
        useAngle={true}
        angle={180}
      >
        <Image
          source={require("../assets/Ellipse.png")}
          style={styles.ellipse1}
        />
        <Text style={styles.splasheader}>
          Its Your first Time, Let Walk you Through Our Services
        </Text>
        <View style={styles.centerText}>
          <Text style={styles.hello}>Ndewo..</Text>
          <Text style={styles.centerSubtitle}>
            We Track and Notify you **** Power Status
          </Text>
        </View>
        <Image
          source={require("../assets/Ellipse2.png")}
          style={styles.ellipse2}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SplashSixth")}
        >
          <NextButton></NextButton>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  splash: {
    widht: "100%",
    height: "100%",
  },
  bg1: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "relative",
  },
  ellipse1: {
    right: 0,
    top: -50,
    position: "absolute",
  },
  ellipse2: {
    position: "absolute",
    bottom: "-20%",
    left: "-25%",
  },
  splasheader: {
    top: 40,
    fontSize: 20,
    fontFamily: "Lato-Regular",
    color: "#7f8489",
    textAlign: "center",
    width: 300,
  },
  centerText: {
    justifyContent: "center",
    height: "80%",
    gap: 20,
  },
  hello: {
    fontSize: 70,
    letterSpacing: 1.4,
    justifyContent: "center",
    fontFamily: "Lato-Black",
    color: "#fdfdfd",
    textAlign: "center",
  },
  centerSubtitle: {
    fontSize: 20,
    fontFamily: "Lato-Regular",
    color: "#7f8489",
    textAlign: "center",
    width: 250,
  },
  button: {
    top: "-10%",
  },
});
export default SplashFivth;
