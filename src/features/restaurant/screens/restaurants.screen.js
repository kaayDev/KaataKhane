import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import { useContext } from "react";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

// console.log(StatusBar.currentHeight);

const SafeArea = styled(SafeAreaView)`
  flex: 1;
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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants, error } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.orange800} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <Spacer />
              <RestaurantInfoCard restaurant={item} />
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
