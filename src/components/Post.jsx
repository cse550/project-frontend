import axios from "axios";
import React, {useState} from "react";

function Post({ post }) {
    const [likes, setLikes] = useState(post.likeCount);

    const handleLike = async () => {
        try{
            const response = await axios.patch(`/api/post/${post.id}`, {
                likeCount: likes + 1,
            });

            setLikes(response.data.likeCount);
        }catch(error){
            console.error('Error liking post', error)
        }
    };
  return (
    <div className="relative p-4 mx-auto w-full flex flex-row justify-between bg-slate-300 rounded-md">
      <h1>{post.username}</h1>

      <div className="flex flex-grow mx-10 p-2 rounded-md bg-slate-200 max-h-[100px] overflow-y-auto" style={{ maxHeight: "100px", overflowY: "auto" }}>
        <p className="text-sm break-words text-ellipsis">{post.content}</p>
      </div>

      <button onClick={handleLike}>
        <img
          src="../src/assets/thumbs-up.png"
          alt="ThumbsUp"
          className="order-2 h-12 w-12"
        />
        <span>{post.likeCount}</span>
      </button>
    </div>
  );
}

export default Post;