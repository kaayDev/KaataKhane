import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/setting.screens";

import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      options="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        options={{ header: () => null }}
        name="Setting"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingStack.Screen name="Camera" component={CameraScreen} />
    </SettingStack.Navigator>
  );
};
