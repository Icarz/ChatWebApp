import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  const { logout } = useLogout();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={logout}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: hovered ? "rgba(239,68,68,0.06)" : "transparent",
        border: hovered
          ? "1px solid rgba(239,68,68,0.25)"
          : "1px solid var(--border)",
        borderRadius: "8px",
        padding: "8px 14px",
        cursor: "pointer",
        color: hovered ? "#ef4444" : "var(--text-secondary)",
        width: "100%",
        transition: "all 0.15s",
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.85rem",
      }}
    >
      <BiLogOut size={15} />
      <span>Sign out</span>
    </button>
  );
};

export default Logout;
