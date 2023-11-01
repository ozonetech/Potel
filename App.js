import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "./screens/WelcomeScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Splash from "./screens/Splash";
import SplashSecond from "./screens/SplashSecond";
import LoginPage from "./screens/LoginPage";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { HomeScreen } from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SplashSecond"
            component={SplashSecond}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar translucent backgroundColor="transparent" />
      </NavigationContainer>
    </>
  );
};
export default App;
