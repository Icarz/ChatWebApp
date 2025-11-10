import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";
const sideBar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
};

export default sideBar;
