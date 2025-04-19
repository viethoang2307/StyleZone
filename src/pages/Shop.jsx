import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredProductsQuery } from "../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../redux/api/categoryApiSlice";

import {
  setCategories,
  setProducts,
  setChecked,
} from "../redux/features/shop/shopSlice";
import Loader from "../components/Loader";
import ProductCard from "./Products/ProductCard";

const Shop = () => {
  const dispatch = useDispatch();
  const { categories, products, checked, radio } = useSelector(
    (state) => state.shop
  );

  const categoriesQuery = useFetchCategoriesQuery();
  const filteredProductsQuery = useGetFilteredProductsQuery({ checked, radio });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    if (!categoriesQuery.isLoading && categoriesQuery.data) {
      dispatch(setCategories(categoriesQuery.data));
    }
  }, [categoriesQuery.data, dispatch]);

  useEffect(() => {
    if (!filteredProductsQuery.isLoading && filteredProductsQuery.data) {
      let result = filteredProductsQuery.data;
      // Price filter
      if (priceFilter) {
        result = result.filter((product) =>
          product.price
            .toString()
            .toLowerCase()
            .includes(priceFilter.toLowerCase())
        );
      }
      dispatch(setProducts(result));
      setCurrentPage(1); // reset to first page on filter change
    }
  }, [filteredProductsQuery.data, dispatch, priceFilter, filteredProductsQuery.isLoading]);

  const handleCheck = (value, id) => {
    const updatedChecked = value
      ? [...checked, id]
      : checked.filter((c) => c !== id);
      console.log(updatedChecked);
    
    dispatch(setChecked(updatedChecked));
  };

  const uniqueBrands = [
    ...new Set(
      (filteredProductsQuery.data || [])
        .map((product) => product.brand)
        .filter(Boolean)
    ),
  ];

  const handleBrandClick = (brand) => {
    const result = filteredProductsQuery.data?.filter(
      (product) => product.brand === brand
    );
    dispatch(setProducts(result || []));
    setCurrentPage(1);
  };

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  // Calculate pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(categories)
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar filters */}
        <aside className="bg-[#151515] p-3 mt-2 mb-2 md:w-1/4">
          <h2 className="text-center py-2 bg-black rounded-full mb-2 text-white">
            Filter by Categories
          </h2>
          <div className="p-5">
            {categories?.map((c) => (
              <div key={c._id} className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheck(e.target.checked, c._id)}
                  className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
                />
                <label className="ml-2 text-sm font-medium text-white">
                  {c.name}
                </label>
              </div>
            ))}
          </div>

          <h2 className="text-center py-2 bg-black rounded-full mb-2 text-white">
            Filter by Brands
          </h2>
          <div className="p-5">
            {uniqueBrands.map((brand) => (
              <div key={brand} className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="brand"
                  onChange={() => handleBrandClick(brand)}
                  className="w-4 h-4 text-pink-400 bg-gray-100 border-gray-300 focus:ring-pink-500 focus:ring-2"
                />
                <label className="ml-2 text-sm font-medium text-white">
                  {brand}
                </label>
              </div>
            ))}
          </div>

          <h2 className="text-center py-2 bg-black rounded-full mb-2 text-white">
            Filter by Price
          </h2>
          <div className="p-5">
            <input
              type="text"
              placeholder="Enter Price"
              value={priceFilter}
              onChange={handlePriceChange}
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-pink-300"
            />
          </div>

          <div className="p-5 pt-0">
            <button
              onClick={() => window.location.reload()}
              className="w-full border py-2 text-white"
            >
              Reset
            </button>
          </div>
        </aside>

        {/* Products list with pagination */}
        <main className="p-3 md:w-3/4">
          <h2 className="text-center mb-2 text-white">
            {products.length} Products
          </h2>
          {products.length === 0 ? (
            <Loader />
          ) : (
            <>
              <div className="flex flex-wrap -mx-3">
                {currentProducts.map((p) => (
                  <div key={p._id} className="p-3 w-full sm:w-1/2 lg:w-1/3">
                    <ProductCard p={p} />
                  </div>
                ))}
              </div>

              {/* Pagination controls */}
              <nav className="flex justify-center mt-6">
                <ul className="inline-flex items-center -space-x-px">
                  {[...Array(totalPages)].map((_, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => paginate(idx + 1)}
                        className={`px-3 py-2 leading-tight border ${
                          currentPage === idx + 1
                            ? "bg-pink-500 text-white"
                            : "bg-white text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;