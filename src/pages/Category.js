import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/data";
import ProductCard from "../components/ProductCard";

const Category = ({ onAddToCart, onAddToWishlist }) => {
  const { categoryName } = useParams(); // Lấy tên danh mục từ URL
  const formattedCategoryName = categoryName ? categoryName.replace(/-/g, " ") : "Tất cả sản phẩm";

  // Danh sách danh mục chính
  const categories = [
    { name: "Tất cả sản phẩm", slug: "" },
    { name: "Thời trang nam", slug: "nam" },
    { name: "Thời trang nữ", slug: "nữ" },
    { name: "Thời trang trẻ em", slug: "trẻ-em" },
    { name: "Giày dép", slug: "giay-dep" },
  ];

  // Lọc sản phẩm: Nếu không có categoryName, lấy tất cả sản phẩm
  const categoryProducts = categoryName
    ? products.filter((p) => p.category.toLowerCase() === formattedCategoryName)
    : products;

  // Trạng thái bộ lọc
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Lấy danh sách kích thước và màu sắc duy nhất
  const allSizes = [...new Set(categoryProducts.flatMap((p) => p.sizes))];
  const allColors = [...new Set(categoryProducts.flatMap((p) => p.colors))];

  // Lọc sản phẩm dựa trên bộ lọc
  const filteredProducts = categoryProducts.filter((product) => {
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const inSizes =
      selectedSizes.length === 0 || selectedSizes.some((size) => product.sizes.includes(size));
    const inColors =
      selectedColors.length === 0 || selectedColors.some((color) => product.colors.includes(color));
    return inPriceRange && inSizes && inColors;
  });

  // Xử lý thay đổi bộ lọc
  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, 300]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">Danh mục: {formattedCategoryName}</h1>

      {/* Thanh điều hướng danh mục */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-4 border-b border-gray-200 pb-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category${category.slug ? `/${category.slug}` : ""}`}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                (category.slug === categoryName) ||
                (!categoryName && category.name === "Tất cả sản phẩm")
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Bộ lọc */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Bộ lọc</h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-gray-700">Giá</h3>
            <input
              type="range"
              min="0"
              max="300"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="300"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer mt-2"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-gray-700">Kích thước</h3>
            <div className="flex flex-wrap gap-2">
              {allSizes.map((size) => (
                <label
                  key={size}
                  className={`flex items-center cursor-pointer px-3 py-1 rounded-full border transition-colors duration-200 ${
                    selectedSizes.includes(size)
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                    className="hidden"
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-gray-700">Màu sắc</h3>
            <div className="flex flex-wrap gap-2">
              {allColors.map((color) => (
                <label
                  key={color}
                  className={`flex items-center cursor-pointer px-3 py-1 rounded-full border transition-colors duration-200 ${
                    selectedColors.includes(color)
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => handleColorChange(color)}
                    className="hidden"
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>
          <button
            onClick={resetFilters}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
          >
            Xóa bộ lọc
          </button>
        </div>
        {/* Danh sách sản phẩm */}
        <div className="col-span-3">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600 text-center py-8">Không tìm thấy sản phẩm nào phù hợp.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={onAddToCart}
                  onAddToWishlist={onAddToWishlist}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;