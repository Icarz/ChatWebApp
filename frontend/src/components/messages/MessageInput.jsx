import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div
      style={{
        padding: "14px 24px",
        borderTop: "1px solid var(--border)",
        background: "var(--bg-surface)",
        flexShrink: 0,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <input
          type="text"
          className="input-custom"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ borderRadius: "10px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: message.trim() ? "var(--accent)" : "var(--bg-elevated)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: loading ? "not-allowed" : "pointer",
            flexShrink: 0,
            transition: "background 0.15s, transform 0.1s",
            color: message.trim() ? "#071828" : "var(--text-muted)",
          }}
        >
          {loading ? (
            <span
              className="animate-spin-btn"
              style={{
                width: "14px",
                height: "14px",
                border: "2px solid currentColor",
                borderTopColor: "transparent",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          ) : (
            <BsSend size={15} />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
