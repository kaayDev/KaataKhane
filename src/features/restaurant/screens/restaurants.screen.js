import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import styled from "styled-components/native";

// console.log(StatusBar.currentHeight);

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};
