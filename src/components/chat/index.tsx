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
import { useState } from "react";
import { SendIcon } from "../../assets";
import { message } from "../../lib/interfaces";
import { useMessages } from "../../lib/messages";

const Chat: React.FC = () => {
  const { messageList, sendMessage } = useMessages();
  const [messageInput, setMessageInput] = useState<string>("");

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
          onChange={(event) => {
            setMessageInput(event.target.value);
          }}
        />
        <MessageSendButton
          type="button"
          onClick={() => sendMessage(messageInput)}
        >
          <MessageSendIcon src={SendIcon} alt="send" />
        </MessageSendButton>
      </MessageInputDiv>
    </ChatBox>
  );
};

export default Chat;
