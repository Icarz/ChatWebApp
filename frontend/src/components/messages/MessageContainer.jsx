import Messages from "../messages/Messages";
import MessageInput from "../messages/MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContextProvider";
import { useSocketContext } from "../../context/SocketContext";
import Avatar from "../Avatar";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--bg-base)",
      }}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Chat header */}
          <div
            style={{
              padding: "14px 24px",
              borderBottom: "1px solid var(--border)",
              background: "var(--bg-surface)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexShrink: 0,
            }}
          >
            <div style={{ position: "relative" }}>
              <Avatar
                src={selectedConversation.profilePic}
                fullName={selectedConversation.fullName}
                seed={selectedConversation._id}
                size={40}
              />
              {onlineUsers.includes(selectedConversation._id) && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "1px",
                    right: "1px",
                    width: "10px",
                    height: "10px",
                    background: "var(--online)",
                    borderRadius: "50%",
                    border: "2px solid var(--bg-surface)",
                  }}
                />
              )}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                }}
              >
                {selectedConversation.fullName}
              </p>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: onlineUsers.includes(selectedConversation._id)
                    ? "var(--online)"
                    : "var(--text-secondary)",
                  marginTop: "2px",
                }}
              >
                {onlineUsers.includes(selectedConversation._id)
                  ? "online"
                  : "offline"}
              </p>
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: "76px",
          height: "76px",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TiMessages size={34} color="var(--text-muted)" />
      </div>
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            marginBottom: "6px",
          }}
        >
          Hey, {authUser?.fullName?.split(" ")[0]} 👋
        </p>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
          }}
        >
          Select a conversation to start messaging
        </p>
      </div>
    </div>
  );
};
