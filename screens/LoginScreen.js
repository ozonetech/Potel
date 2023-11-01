import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View className="bg-black h-full w-full">
        <StatusBar style="light" />
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="absolute"
          source={require("../assets/potellogoicon.png")}
          resizeMode="center"
        />

        {/* lights */}
        <View className="flex-row justify-around w-full absolute">
          {/* <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          className="h-[160] w-[65] opacity-75"
        /> */}
        </View>

        {/* title and form */}
        <View className="h-full w-full flex justify-around pt-40 pb-10">
          {/* title */}
          <View className="flex items-center">
            <Image
              className="absolute"
              source={require("../assets/potellogoicon.png")}
              style={{ top: -650, width: 50 }}
              resizeMode="center"
            />
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              className="text-white tracking-wider text-5xl"
              style={{ top: -100 }}
            >
              POTEL
            </Animated.Text>
          </View>

          {/* form */}
          <View className="flex items-center mx-5 space-y-4">
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-full"
            >
              <TextInput placeholder="Email" placeholderTextColor={"gray"} />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-full mb-3"
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor={"gray"}
                secureTextEntry
              />
            </Animated.View>

            <Animated.View
              className="w-full"
              entering={FadeInDown.delay(400).duration(1000).springify()}
            >
              <TouchableOpacity
                className="w-full p-3 rounded-2xl mb-3"
                style={styles.LoginButton}
              >
                <Text className="text-xl font-bold text-white text-center">
                  Login
                </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              className="flex-row justify-center"
            >
              <Text className="text-white">Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push("Register")}>
                <Text className="text-sky-600">SignUp</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: "#F4CE14",
    borderWidth: 3,
    borderColor: "#b48811",
  },
});
