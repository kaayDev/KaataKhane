import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/account-background.jpg"),
})`
  flex: 1;
  align-item: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
position:absolute;
width: 100%;
height: 100%
background-color: rgba(255,255,205,0.3)
`;

export const AccountContainer = styled.View`
background-color:rgba(255,255,255,0.7)
padding: ${(props) => props.theme.space[4]}
margin-top: ${(props) => props.theme.space[2]}
`;
