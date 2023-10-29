import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

function NextButton(props) {
  return (
    <View>
      <Image
        style={{ width: 150 }}
        resizeMode="contain"
        source={require("../assets/bg.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
export default NextButton;
