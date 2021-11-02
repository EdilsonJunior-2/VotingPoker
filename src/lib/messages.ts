import { useState } from "react";
import { message } from "../components/chat/interfaces";

export const useMessages = () => {
  const [messageList, setMessageList] = useState<message[]>([
    {
      id: "0",
      sender: "Henrique",
      messageSent: "Mensagem",
    },
  ]);

  const sendMessage = (message: string) => {
    const m = messageList.slice();
    m.push({
      id: m.length.toString(),
      sender: "Pedro",
      messageSent: message,
    });
    setMessageList(m);
  };

  return {
    messageList,
    sendMessage,
  };
};
