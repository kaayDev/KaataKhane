import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
