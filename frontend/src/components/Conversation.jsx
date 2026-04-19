import { useState } from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "../context/SocketContext";
import Avatar from "./Avatar";

const Conversation = ({ conversation, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => setSelectedConversation(conversation)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 20px",
        cursor: "pointer",
        borderLeft: isSelected
          ? "2px solid var(--accent)"
          : "2px solid transparent",
        background: isSelected
          ? "var(--bg-hover)"
          : hovered
          ? "rgba(255,255,255,0.02)"
          : "transparent",
        transition: "background 0.12s, border-color 0.12s",
      }}
    >
      {/* Avatar */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <Avatar
          src={conversation.profilePic}
          fullName={conversation.fullName}
          seed={conversation._id}
          size={40}
          style={{
            border: isSelected
              ? "2px solid var(--border-accent)"
              : "2px solid transparent",
            transition: "border-color 0.12s",
          }}
        />
        {isOnline && (
          <span
            style={{
              position: "absolute",
              bottom: "1px",
              right: "1px",
              width: "9px",
              height: "9px",
              background: "var(--online)",
              borderRadius: "50%",
              border: "1.5px solid var(--bg-surface)",
            }}
          />
        )}
      </div>

      {/* Name + emoji */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
              color: isSelected ? "var(--accent)" : "var(--text-primary)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              transition: "color 0.12s",
            }}
          >
            {conversation.fullName}
          </p>
          <span style={{ fontSize: "13px", flexShrink: 0, marginLeft: "6px" }}>
            {emoji}
          </span>
        </div>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.63rem",
            color: isOnline ? "var(--online)" : "var(--text-muted)",
            marginTop: "3px",
          }}
        >
          {isOnline ? "online" : "offline"}
        </p>
      </div>
    </div>
  );
};

export default Conversation;
