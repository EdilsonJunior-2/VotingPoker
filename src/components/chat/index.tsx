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

const Chat: React.FC = () => {
  return (
    <ChatBox>
      <MessageList>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
        <MessageBox name="Henrique">
          <MessageSender name="Henrique">Henrique</MessageSender>
          <Message>Mensagem</Message>
        </MessageBox>
        <MessageBox name="Pedro">
          <MessageSender name="Pedro">Pedro</MessageSender>
          <Message>Mensagem 2 </Message>
        </MessageBox>
      </MessageList>
      <MessageInputDiv>
        <MessageInput type="text" />
        <MessageSendButton type="button">
          <MessageSendIcon src={SendIcon} alt="send" />
        </MessageSendButton>
      </MessageInputDiv>
    </ChatBox>
  );
};

export default Chat;
