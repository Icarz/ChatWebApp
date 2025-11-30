import MessageContainer from "../components/messages/MessageContainer";
import SideBar from "../components/sideBar";
const Home = () => {
  return (
		<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg">
  <SideBar />
  <MessageContainer />
</div>

	);
};


export default Home;
