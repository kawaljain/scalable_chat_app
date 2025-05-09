function ChatMessages(props) {
  const { type, message, time } = props;

  return (
    <div
      className={`chat-message ${
        type === "other" ? "other-message" : "my-message"
      } `}
    >
      <div
        className={`message ${type === "other" ? "text-start" : "text-end"} `}
      >
        <div className="">{message}</div>
        <div className="chat-time">{time}</div>
      </div>
    </div>
  );
}

export default ChatMessages;
