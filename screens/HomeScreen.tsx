import { View, StyleSheet,Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { Card } from "../components/Card";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const cards = [
  {
    source: require("../assets/location/location1.jpg"),
    text:"Location1"
  },
  {
    source: require("../assets/location/location2.jpg"),
    text:"Location2"
  },
  {
    source: require("../assets/location/location3.jpg"),
    text:"Location3"
  },
  {
    source: require("../assets/location/location4.jpg"),
    text:"Location4"
  },
  {
    source: require("../assets/location/location2.jpg"),
    text:"Location5"
  },
  {
    source: require("../assets/location/location5.jpg"),
    text:"Location6"
  },
  {
    source: require("../assets/location/location3.jpg"),
    text:"Location7"
  },
  {
    source: require("../assets/location/location5.jpg"),
    text:"Location8"
  },
  
];

export const assets = cards.map((card) => card.source);

export const HomeScreen = () => {
  const shuffleBack = useSharedValue(false);
  return (
    <View style={styles.container}>
    <GestureHandlerRootView style={styles.card}>
      {cards.map((card, index) => (
        <Card card={card} key={index} index={index} shuffleBack={shuffleBack} />
      ))}
    </GestureHandlerRootView>
    <Text style={styles.cardSubtitle}>We Cover The Above Location</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    top:"15%",
    height:"25%",
  },
  container:{
    backgroundColor:"#101111",
    height:"100%"
  },
  cardSubtitle:{
    color:"#fff",
    top:"30%",
    alignSelf:"center",
    fontWeight:"bold"
  }
});