import React, { useContext, useEffect, useState } from "react";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.components";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const SettingsList = styled(List.Section)`
  background-color: rgba(255, 255, 255, 0.7);
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/account-back.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const TransparentSafeArea = styled(SafeArea)`
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(() => {
    getProfilePicture();
  }, [user]);

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon size={180} icon="human" backgroundColor="tomato" />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="tomato"
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text variant="caption">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <SettingsList>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="tomato" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color="tomato" icon="door" />
            )}
            onPress={onLogout}
          />
        </SettingsList>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
