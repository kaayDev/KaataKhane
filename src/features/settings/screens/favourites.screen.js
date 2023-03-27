import React, { useContext } from "react";
import { Text } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";

import styled from "styled-components/native";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.components";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const FavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <FavouritesArea style={{ alignItems: "center", justifyContent: "center" }}>
      <Text center>No favourites yet</Text>
    </FavouritesArea>
  );
};
