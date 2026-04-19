import MessageContainer from "../components/messages/MessageContainer";
import SideBar from "../components/sideBar";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "var(--bg-base)",
      }}
    >
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
