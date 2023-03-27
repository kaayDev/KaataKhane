import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.component.js";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  Info,
  RestaurantCardCover,
  Section,
  Rating,
  SectionEnd,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Rajesh dai ko coffee shop",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/7020290/pexels-photo-7020290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "teha para ko rukh muni",
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer positionVariant="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer positionVariant="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
