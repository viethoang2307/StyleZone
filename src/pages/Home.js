import React from "react";
import BannerSlider from "../components/BannerSlider";
import CollectionCard from "../components/CollectionCard";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import BlogPost from "../components/BlogPost";
import { products } from "../data/data";

const collections = [
  { name: "Xuân - Hè", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80" },
  { name: "Thu - Đông", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&q=80" },
  { name: "Business", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" },
  { name: "Casual", image: "https://images.unsplash.com/photo-1613908892468-14f4f93f5cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const categories = [
  { name: "Nam", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&q=80" },
  { name: "Nữ", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { name: "Trẻ em", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80" },
];

const blogPosts = [
  {
    title: "Top 5 mẹo phối đồ mùa thu",
    excerpt: "Khám phá những cách phối đồ thời thượng để tỏa sáng trong mùa thu này.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
  {
    title: "Cách chọn áo khoác phù hợp",
    excerpt: "Hướng dẫn chi tiết để chọn áo khoác vừa vặn và phong cách.",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&q=80",
  },
];

const Home = ({ onAddToCart, onAddToWishlist }) => {
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Bộ sưu tập</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.name} {...collection} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Danh mục</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Blog thời trang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;