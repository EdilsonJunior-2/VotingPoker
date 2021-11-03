import { useState } from "react";
import { message } from "./interfaces";

export const useMessages = () => {
  const [messageList, setMessageList] = useState<message[]>([]);

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
