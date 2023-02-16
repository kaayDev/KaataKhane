import { StyleSheet, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";

import { theme } from "./src/infrastructure/theme/";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
