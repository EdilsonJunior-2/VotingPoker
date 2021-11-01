import styled from "styled-components";
import { colors } from "../../styles/colors";

interface chatBoxUserProps {
  name: string;
}

const loggedUser = "Pedro";

function isActualUser(name: string) {
  return name === loggedUser;
}

export const ChatBox = styled.div`
  font-family: sans-serif;
  padding: 30px 0;
  width: 20%;
  min-width: 200px;
  background: ${colors.backgroundLight};
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessageList = styled.div`
  overflow: auto;
  margin: 10px 0;
`;

export const MessageBox = styled.div`
  border-radius: 10px;
  width: 80%;
  margin: ${(props: chatBoxUserProps) =>
    isActualUser(props.name) ? "10px 2% 10px 8%" : "10px 8% 10px 2%"};
  padding: 10px 5%;
  background-color: ${colors.background};
`;

export const MessageSender = styled.h5`
  margin: 5px 0;
  color: ${(props: chatBoxUserProps) =>
    isActualUser(props.name) ? colors.actualUserColor : colors.otherUserColor};
`;

export const Message = styled.div``;

export const MessageInputDiv = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;

export const MessageInput = styled.input``;

export const MessageSendButton = styled.button`
  width: 80%;
  margin: 0 10%;
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const MessageSendIcon = styled.img`
  width: 80%;
`;
