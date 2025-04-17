import React from "react";
import Card from "./Card";

const BlogPost = ({ title, excerpt, image }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </div>
    </Card>
  );
};

export default BlogPost;