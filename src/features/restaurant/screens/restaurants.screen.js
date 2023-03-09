import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import { useContext } from "react";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

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

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large" />
            <RestaurantInfoCard />
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
