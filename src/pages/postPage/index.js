import React, { useState, useEffect } from "react";

const PostListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/thread/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Post List</h2>
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
                  alt={`Post image`}
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
