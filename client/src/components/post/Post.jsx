import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const user = Users.filter((u) => u.id === 1);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="ProfPic"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          {/* the "post?" apparently conditionally renders?  */}
          <img className="postImg" src={post.photo} alt="PostPic" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="reactIcon" src="/assets/heart.png" alt="Hearts" />
            <img className="reactIcon" src="/assets/like.png" alt="Likes" />
            <span className="postReactCounter">
              {post.likes} people reacted
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
