import styled from "styled-components";
import { colors } from "../../styles/colors";

export const UsersBox = styled.div`
  font-family: sans-serif;
  background: ${colors.backgroundLight};
  padding: 30px 0 30px 10px;
  width: calc(20% - 10px);
  min-width: 200px;
`;

export const Users = styled.div`
  margin: 10px 0;
  padding: 20px 5px;
  background-color: ${colors.backgroundLighter};
`;

export const User = styled.div`
  margin: 5px 0;
`;
