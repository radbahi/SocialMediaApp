import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/like.png"
              alt="ProfPic"
            />
            <span className="postUsername">Username here</span>
            <span className="postDate">Timestamp here</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Post Text</span>
          <img className="postImg" src="/assets/ad.png" alt="PostPic" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="reactIcon" src="/assets/heart.png" alt="Hearts" />
            <img className="reactIcon" src="/assets/like.png" alt="Likes" />
            <span className="postReactCounter">32 people reacted</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
