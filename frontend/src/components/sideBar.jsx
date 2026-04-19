import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";
import Avatar from "./Avatar";
import { useAuthContext } from "../context/AuthContextProvider";

const SideBar = () => {
  const { authUser } = useAuthContext();

  return (
    <div
      style={{
        width: "288px",
        minWidth: "288px",
        background: "var(--bg-surface)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Profile + Search header */}
      <div
        style={{
          padding: "24px 20px 16px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "18px",
          }}
        >
          <Avatar
            src={authUser?.profilePic}
            fullName={authUser?.fullName}
            seed={authUser?.userName}
            size={38}
            style={{ border: "2px solid var(--border-accent)" }}
          />
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.92rem",
                color: "var(--text-primary)",
                lineHeight: 1.2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {authUser?.fullName}
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: "var(--accent)",
                marginTop: "3px",
              }}
            >
              @{authUser?.userName}
            </p>
          </div>
        </div>
        <SearchInput />
      </div>

      {/* Conversation list */}
      <div style={{ flex: 1, overflowY: "auto", paddingTop: "8px" }}>
        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.66rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            padding: "6px 20px 8px",
          }}
        >
          Messages
        </p>
        <Conversations />
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "14px 20px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Logout />
      </div>
    </div>
  );
};

export default SideBar;
