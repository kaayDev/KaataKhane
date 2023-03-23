import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <TextInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
      </AccountContainer>
    </AccountBackground>
  );
};
