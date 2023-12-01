import axios from "axios";
import React, { useState } from "react";

function GlobalPost({ post }) {
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

    { /* formatting timestamp from backend */ }
    let timestampFromBackend = post.timestamp;
    let date = new Date(timestampFromBackend);
    let formattedDate = date.toLocaleString(); { /* toLocaleDateString for mm//dd//yy and toLocateString for THAT and time of day */}

    return (
        <div className="relative mx-auto w-full flex h-20 flex-row border border-b justify-between">
            <h1>{post.username}</h1>

            <div className="flex flex-grow mx-6 p-2 max-h-[100px] overflow-y-auto" style={{ maxHeight: "100px", overflowY: "auto" }}>
                <p className="text-lg break-words text-ellipsis">{post.content}</p>
            </div>

            <div className="flex flex-col">
            
            {/* try to get the date */}
            <span className="text-xs p-2 text-slate-600">
                {formattedDate} { /* formatted like - 11/29/2023, 9:23:17 PM */ }
            </span>

            <button className="flex" onClick={handleLike}>
                <img
                    src="../src/assets/thumbs-up.png"
                    alt="Thumbs Up"
                    className="h-6 w-6 mx-4"
                />
                <span>{likes}</span> {/* Display the local likes state */}
            </button>

            </div>
        </div>
    );
}

export default GlobalPost;
