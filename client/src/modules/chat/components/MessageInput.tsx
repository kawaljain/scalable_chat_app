import { BiSend } from "react-icons/bi";

function MessageInput() {
  return (
    <div className="chat-input">
      <div className="input-group mb-0">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <BiSend fontSize={25} />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter text here..."
        />
      </div>
    </div>
  );
}

export default MessageInput;
