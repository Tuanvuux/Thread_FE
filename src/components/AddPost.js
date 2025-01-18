import React, { useState } from "react";
import { API_ENDPOINTS } from "../config/api";
const AddPostPage = () => {
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!caption.trim() && images.length === 0) {
      alert("Please enter a caption or upload images!");
      return;
    }

    const formData = new FormData();
    formData.append("caption", caption);  // Gửi caption
    formData.append("userId", 1);  // Thêm userId (thí dụ 1, bạn có thể thay đổi theo yêu cầu)
    
    images.forEach((image) => {
      formData.append("files", image); 
    });

    try {
      const response = await fetch(`${API_ENDPOINTS.CREATE_POST}}`, {  // URL đúng của API
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Post added successfully!");
        setCaption("");
        setImages([]);
        setPreviewUrls([]);
      } else {
        const errorMessage = await response.text();
        alert(`Failed to add post: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("An error occurred while adding the post.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Caption Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="caption">
            Caption
          </label>
          <textarea
            id="caption"
            rows="4"
            value={caption}
            onChange={handleCaptionChange}
            placeholder="What's on your mind?"
            className="w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="images">
            Upload Images
          </label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {/* Image Previews */}
          <div className="mt-2 flex gap-2 flex-wrap">
            {previewUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Preview ${index}`}
                className="w-20 h-20 object-cover rounded-md border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
