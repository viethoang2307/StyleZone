import React from "react";
import { Comment, Avatar } from "antd";

const reviews = [
  { author: "John Doe", content: "Sản phẩm chất lượng, giao hàng nhanh!", rating: 5 },
  { author: "Jane Smith", content: "Thiết kế đẹp, nhưng size hơi nhỏ.", rating: 4 },
];

const ReviewSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Đánh giá khách hàng</h2>
      {reviews.map((review, index) => (
        <Comment
          key={index}
          author={review.author}
          avatar={<Avatar>{review.author[0]}</Avatar>}
          content={<p>{review.content}</p>}
        />
      ))}
    </div>
  );
};

export default ReviewSection;