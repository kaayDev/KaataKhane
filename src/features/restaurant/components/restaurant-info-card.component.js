import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components/native";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[4]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Hari dai ko coffee pasal",
    icon,
    photos = [
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "pul muni bato side ma",
    rating = 4,
    openingHours,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={star} width={20} height={20} />
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
