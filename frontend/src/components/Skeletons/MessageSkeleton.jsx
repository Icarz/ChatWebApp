const MessageSkeleton = ({ fromMe = false }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "8px",
        flexDirection: fromMe ? "row-reverse" : "row",
      }}
    >
      <div
        className="skeleton-block"
        style={{ width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0 }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", maxWidth: "55%" }}>
        <div
          className="skeleton-block"
          style={{ height: "38px", width: fromMe ? "180px" : "220px", borderRadius: "12px" }}
        />
        <div
          className="skeleton-block"
          style={{ height: "8px", width: "50px", borderRadius: "4px", alignSelf: fromMe ? "flex-end" : "flex-start" }}
        />
      </div>
    </div>
  );
};

export default MessageSkeleton;
