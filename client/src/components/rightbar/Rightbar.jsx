import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            alt="birthdayImg"
            src="/assets/gift.png"
          />
          <span className="birthdayText">Birthday today here</span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information Title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">City Info</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">From Info</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Relationship Info</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowingDiv">
          <div className="rightbarFollowing">
            <img
              src=""
              alt="followingProfPic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Following Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src=""
              alt="followingProfPic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Following Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src=""
              alt="followingProfPic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Following Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src=""
              alt="followingProfPic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Following Name</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}
