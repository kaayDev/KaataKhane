import React from "react";
import { Button } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { AccountBackground, AccountCover } from "../components/account.styles";
import { AccountContainer } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Text>Account Screen</Text>
        <Button
          icon="lock"
          buttonColor="tomato"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          icon="lock"
          buttonColor="tomato"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};
