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
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
          ]}
          renderItem={() => (
            <>
              <Spacer position="bottom" size="large" />
              <RestaurantInfoCard />
            </>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
