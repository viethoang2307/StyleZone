import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import ReviewSection from "../components/ReviewSection";
import RelatedProducts from "../components/RelatedProducts";
import { products } from "../data/data";

const Product = ({ onAddToCart, onAddToWishlist }) => {
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  const product = products.find((p) => p.id === id); // Tìm sản phẩm theo id

  // Lọc sản phẩm liên quan dựa trên danh mục
  const relatedProducts = products.filter(
    (p) => p.id !== id && p.category === product?.category
  ).slice(0, 4); // Giới hạn 4 sản phẩm

  // Xử lý trường hợp không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Sản phẩm không tìm thấy</h1>
        <p className="text-gray-600 mb-6">Rất tiếc, sản phẩm bạn tìm kiếm không tồn tại.</p>
        <Link to="/category" className="text-blue-500 underline">
          Quay lại danh mục
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-500">Trang chủ</Link> &gt;{" "}
        <Link to={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-blue-500">
          {product.category}
        </Link>{" "}
        &gt; <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Chi tiết sản phẩm */}
      <ProductDetail
        product={product}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />

      {/* Đánh giá */}
      <ReviewSection />

      {/* Sản phẩm liên quan */}
      {relatedProducts.length > 0 && (
        <RelatedProducts
          products={relatedProducts}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      )}
    </div>
  );
};

export default Product;