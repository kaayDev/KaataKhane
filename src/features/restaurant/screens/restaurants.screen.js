import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import { useContext } from "react";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../search.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
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

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants, error } = useContext(RestaurantContext);
  console.log(navigation);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.orange800} />
        </LoadingContainer>
      )}
      <Search />
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
