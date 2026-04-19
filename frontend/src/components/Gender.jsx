const Gender = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {["male", "female"].map((g) => (
        <button
          key={g}
          type="button"
          onClick={() => onCheckboxChange(g)}
          style={{
            flex: 1,
            padding: "9px 12px",
            borderRadius: "8px",
            border:
              selectedGender === g
                ? "1px solid var(--border-accent)"
                : "1px solid var(--border)",
            background:
              selectedGender === g ? "var(--accent-dim)" : "var(--bg-surface)",
            color:
              selectedGender === g ? "var(--accent)" : "var(--text-secondary)",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          {g === "male" ? "♂ Male" : "♀ Female"}
        </button>
      ))}
    </div>
  );
};

export default Gender;
