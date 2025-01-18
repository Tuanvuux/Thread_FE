import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../config/api';

function Index2() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_ENDPOINTS.GET_LIST_POST}`);
                const data = await response.json();
                setPost(data);
                setLoading(false); // Dữ liệu đã tải xong, cập nhật trạng thái loading
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false); // Nếu có lỗi, cũng phải cập nhật trạng thái loading
            }
        };

        fetchPost();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>; // Hiển thị thông báo khi đang tải
    }

    return (
        <div>
            {post.map((postItem, index) => (
                <h1 key={index}>{postItem.caption}</h1> // Cung cấp key duy nhất cho mỗi phần tử
            ))}
        </div>
    );
}

export default Index2;
