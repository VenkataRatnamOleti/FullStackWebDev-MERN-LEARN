import { useState } from "react";

export default function LikeButtion() {
  let [isLiked, setIsLiked] = useState(false);
  let [likeCount, setLikeCount] = useState(0);
  let handleClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(likeCount+1);
  };
  let styling = {color: "red"};
  return (
    <div>
      <p>Likes : {likeCount}</p>
      <p onClick={handleClick}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={styling}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
