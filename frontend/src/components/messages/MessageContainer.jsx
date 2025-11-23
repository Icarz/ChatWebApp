import Messages from "../messages/Messages";
import MessageInput from "../messages/MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const isNoChatSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {isNoChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To </span>
            <span className="text-gray-900">Icarus</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center text-gray-200 font-semibold gap-2">
      <p>Welcome Icarus 🤘</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl" />
    </div>
  );
};
