import UserInital from "../../../layouts/UserInital";

function ProfileCard() {
  return (
    <div className="top-container ">
      {false ? (
        <img
          src="https://i.imgur.com/G1pXs7D.jpg"
          className="img-fluid profile-image"
          width="60"
        />
      ) : (
        <UserInital />
      )}

      <div className=" ml-10 ">
        <h5 className="name">Clarke Jeffery</h5>
        <p className="mail">Last seen: 2 hours ago</p>
      </div>
    </div>
  );
}

export default ProfileCard;
