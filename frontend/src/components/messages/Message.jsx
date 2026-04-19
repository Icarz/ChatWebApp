import { useAuthContext } from "../../context/AuthContextProvider";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import Avatar from "../Avatar";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedDate = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const avatarName = fromMe ? authUser.fullName : selectedConversation?.fullName;
  const avatarSeed = fromMe ? authUser.userName : selectedConversation?._id;
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  return (
    <div
      className="animate-msg-in"
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "8px",
        marginBottom: "14px",
        flexDirection: fromMe ? "row-reverse" : "row",
      }}
    >
      <Avatar
        src={profilePic}
        fullName={avatarName}
        seed={avatarSeed}
        size={28}
        style={{ opacity: 0.9 }}
      />
      <div style={{ maxWidth: "62%" }}>
        <div
          style={{
            background: fromMe ? "var(--sent-bg)" : "var(--bg-elevated)",
            border: fromMe
              ? "1px solid var(--border-accent)"
              : "1px solid var(--border)",
            borderRadius: fromMe
              ? "18px 18px 4px 18px"
              : "18px 18px 18px 4px",
            padding: "10px 15px",
            color: "var(--text-primary)",
            fontSize: "0.9rem",
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1.55,
            boxShadow: fromMe
              ? "0 0 18px rgba(0,213,189,0.07)"
              : "none",
          }}
        >
          {message.message}
        </div>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.62rem",
            color: "var(--text-muted)",
            marginTop: "5px",
            textAlign: fromMe ? "right" : "left",
          }}
        >
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default Message;
