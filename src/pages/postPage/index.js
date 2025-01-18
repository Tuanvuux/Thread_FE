import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../config/api";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FiRepeat } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

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
    <div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.postId}
            className="w-[638px] flex mx-auto px-6 py-3 bg-white shadow-md rounded-md border-b pb-4"
          >
            <div className="w-12 h-[45px] pt-1">
            <img
                src={`${process.env.PUBLIC_URL}/images/avatar.jpg`}
                alt="Avatar"
                className="w-9 h-9 rounded-full mr-3"
              />
            </div>
            <div className="w-[542px]">
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <span className="font-bold mr-2">TuanVuux</span>
                <span>5 giờ trước</span>
              </div>
              <BsThreeDots className="w-5 h-5" />
            </div>

            <div className="mb-2">{post.caption}</div>

            <div className="mt-2 flex gap-2 flex-wrap">
              {/* Hiển thị ảnh nếu có */}
              {post.images &&
                post.images.map((image) => (
                  <img
                    key={image.imageId}
                    src={`http://localhost:8080/thread/${image.imageUrl}`}
                    alt="Post"
                    className="w-20 h-20 object-cover rounded-md border border-gray-300"
                  />
                ))}
            </div>
            <div className="flex mt-4">
              <div className="w-11 h-9 px-1 flex justify-center items-center">
                <FaRegHeart className="w-[19px] h-[18px]" />
              </div>
              <div className="w-11 h-9 px-1 flex justify-center items-center">
                <HiOutlineChatBubbleOvalLeft className="w-[19px] h-[22px]" />
              </div>
              <div className="w-11 h-9 px-1 flex justify-center items-center">
                <FiRepeat className="w-[18px] h-[18px]" />
              </div>
              <div className="w-11 h-9 px-1 flex justify-center items-center">
                <FiSend className="w-[18px] h-[18px]" />
              </div>
            </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostListPage;
