import {
  ChatBox,
  MessageList,
  MessageBox,
  MessageSender,
  Message,
  MessageInput,
  MessageInputDiv,
  MessageSendButton,
  MessageSendIcon,
} from "./styles";
import { SendIcon } from "../../assets";
import { Component, useState } from "react";
import { message } from "./interfaces";

const Chat: React.FC = () => {
  const [messageInput, setMessageInput] = useState<string>("");
  const [messageList, setMessageList] = useState<message[]>([
    {
      id: "0",
      sender: "Henrique",
      messageSent: "Mensagem",
    },
  ]);

  const sendMessage = () => {
    const m = messageList;
    m.push({
      id: m.length.toString(),
      sender: "Pedro",
      messageSent: messageInput,
    });
    setMessageList(m);
    console.log(messageList);
  };

  return (
    <ChatBox>
      <MessageList>
        {messageList.map((messageData: message) => (
          <MessageBox key={messageData.id} name={messageData.sender}>
            <MessageSender name={messageData.sender}>
              {messageData.sender}
            </MessageSender>
            <Message>{messageData.messageSent}</Message>
          </MessageBox>
        ))}
      </MessageList>
      <MessageInputDiv>
        <MessageInput
          type="text"
          value={messageInput}
          onChange={(event) => {
            setMessageInput(event.target.value);
          }}
        />
        <MessageSendButton type="button" onClick={sendMessage}>
          <MessageSendIcon src={SendIcon} alt="send" />
        </MessageSendButton>
      </MessageInputDiv>
    </ChatBox>
  );
};

export default Chat;
