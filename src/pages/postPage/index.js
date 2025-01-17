import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../config/api";
const PostListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_ENDPOINTS.GET_LIST_POST}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-[639px] mx-auto p-4 bg-white shadow-md rounded-md">
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post.postId} className="mb-4 border-b pb-4">
            <p className="font-semibold">{post.caption}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {/* Lấy và hiển thị ảnh */}
              {post.images && post.images.map((image) => (
                <img
                  key={image.imageId}
                  src={`http://localhost:8080/thread/${image.imageUrl}`}
                  alt={`Post`}
                  className="w-20 h-20 object-cover rounded-md border border-gray-300"
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostListPage;
