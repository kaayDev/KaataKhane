import React, { useContext, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  Title,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Kata Khane ?</Title>
      <AccountContainer>
        <TextInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer size="large">
          <Text variant="error">{error}</Text>
        </Spacer>
        <Button
          icon="lock-open-outline"
          onPress={() => onLogin(email, password)}
        >
          Login
        </Button>
      </AccountContainer>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </AccountBackground>
  );
};
