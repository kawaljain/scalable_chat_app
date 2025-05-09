import { BiSearch } from "react-icons/bi";
import ProfileCard from "./ProfileCard";

const ChatUserList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 123, 1234];
  return (
    <div id="plist" className="people-list col-md-4">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <BiSearch fontSize={20} />
          </span>
        </div>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      {arr.map(() => (
        <ProfileCard />
      ))}
    </div>
  );
};
export default ChatUserList;
