import ChatUserList from "../components/ChatUserList";
import ChatMessages from "../components/ChatMessages";
import MessageInput from "../components/MessageInput";
import ChatHeader from "../components/ChatHeader";

const ChatPage = () => {
  const arr = [
    {
      type: "other",
      message: "Hello Kawal",
      time: "10:15 Am",
    },
    {
      type: "me",
      message:
        "Hi User, how are your ashw akfds k aksdf jkasj fkasflkasdj flkas dlkfj aslkdfj alksdfj l; dalkfj klasdflkasjfl aslkjfj l;kasf jlkas",
      time: "10:15 Am",
    },
    {
      type: "other",
      message: "Hello Kawal",
      time: "10:15 Am",
    },
  ];
  return (
    <>
      <div className="container card chat-app">
        <div className="row ">
          <ChatUserList />
          <div className="chat chat-meessage-container col-md-8">
            <ChatHeader />
            <div className="chat-history">
              {arr.map((item) => (
                <ChatMessages {...item} />
              ))}
            </div>
            <div className="col-md-12 ">
              <MessageInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatPage;
