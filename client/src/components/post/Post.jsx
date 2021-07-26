import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={"/assets/DefaultProfilePic.png"}
              alt="ProfPic"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          {/* the "post?" apparently conditionally renders?  */}
          <img className="postImg" src={post.img} alt="PostPic" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="reactIcon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt="Hearts"
            />
            <img
              className="reactIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt="Likes"
            />
            <span className="postReactCounter">{like} people reacted</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
