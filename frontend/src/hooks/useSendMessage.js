import { useState } from "react";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  // newMessageText = the text user typed
  const sendMessage = async (newMessageText) => {
    if (!newMessageText.trim()) return; 
    setLoading(true);

    try {
      const res = await fetch(
        `/api/message/send/${selectedConversation._id}`, 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newMessageText }), 
        }
      );

      const data = await res.json();
      console.log("Response data:", data);

      if (res.status !== 200) throw new Error(data.message || "Failed to send");
      setMessages([...messages, data]); 
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
