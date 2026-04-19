import useGetConversations from "../hooks/useGetConversations";
import Conversation from "../components/Conversation";
import { funEmojis } from "../utils/emojis.js";

const getStableEmoji = (id) => {
  const index = [...id].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return funEmojis[index % funEmojis.length];
};

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  if (loading) {
    return (
      <div style={{ padding: "8px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              className="skeleton-block"
              style={{ width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0 }}
            />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <div className="skeleton-block" style={{ height: "12px", width: "60%", borderRadius: "4px" }} />
              <div className="skeleton-block" style={{ height: "10px", width: "35%", borderRadius: "4px" }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {conversations.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getStableEmoji(conversation._id)}
        />
      ))}
    </div>
  );
};

export default Conversations;
