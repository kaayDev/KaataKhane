import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { Searchbar } from "react-native-paper";

// console.log(StatusBar.currentHeight);

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: "yellow" }}>
          <Searchbar />
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "red" }}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
