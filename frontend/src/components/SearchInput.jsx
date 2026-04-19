import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation, conversations } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Enter at least 3 characters.");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
      <FaSearch
        style={{
          position: "absolute",
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "var(--text-muted)",
          fontSize: "11px",
          pointerEvents: "none",
        }}
      />
      <input
        type="text"
        value={search}
        placeholder="Search..."
        className="input-custom"
        style={{ paddingLeft: "32px", fontSize: "0.85rem", borderRadius: "8px" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
