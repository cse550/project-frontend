import axios from "axios";
import React, { useState } from "react";

function Post({ post }) {
    const [likes, setLikes] = useState(post.likeCount);

    const handleLike = async () => {
        const newLikeCount = likes + 1;
        try {
            const response = await axios.patch(`/api/post/${post.postId}`, {
                likeCount: newLikeCount,
            });

            setLikes(response.data.likeCount);
        } catch (error) {
            console.error('Error liking post', error);
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
                    alt="Thumbs Up"
                    className="order-2 h-12 w-12"
                />
                <span>{likes}</span> {/* Display the local likes state */}
            </button>
        </div>
    );
}

export default Post;
