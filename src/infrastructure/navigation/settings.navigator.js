import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SettingsScreen } from "../../features/settings/screen/setting.screens";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  <SettingsStack.Navigator
    headerMode="screen"
    screenOptions={{
      cardStyleInterpolator: cardStyleInterpolator.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen
      options={{ header: () => null }}
      name="Settings"
      component={SettingsScreen}
    />
    <SettingsStack.Screen name="Favourites" component={() => null} />
  </SettingsStack.Navigator>;
};
