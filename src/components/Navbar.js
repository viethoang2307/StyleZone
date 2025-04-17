import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

const Navbar = ({ cartItems, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight hover:text-blue-300 transition-colors">
          StyleZone
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-lg hover:text-blue-300 transition-colors">
            Trang Chủ
          </Link>
          <Link to="/category" className="text-lg hover:text-blue-300 transition-colors">
            Danh Mục
          </Link>
          <Link to="/cart" className="relative text-lg hover:text-blue-300 transition-colors">
            Giỏ Hàng
            {cartItems.length > 0 && (
              <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link to="/wishlist" className="text-lg hover:text-blue-300 transition-colors">
            Yêu Thích
          </Link>
          {user ? (
            <Link to="/profile" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <User className="h-6 w-6" />
              <span>{user.name || "Tài khoản"}</span>
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-lg hover:text-blue-300 transition-colors">
                Đăng Nhập
              </Link>
              <Link to="/register" className="text-lg hover:text-blue-300 transition-colors">
                Đăng Ký
              </Link>
            </>
            
          )}
          <Link to="/account" className="block hover:text-blue-400 transition-colors" onClick={toggleMenu}>
            Tài Khoản
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

    

     
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
          <div className="bg-gray-900 w-3/4 max-w-xs h-full p-6 animate-slide-in">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="text-2xl font-bold tracking-tight text-white">
                StyleZone
              </Link>
              <button onClick={toggleMenu} className="focus:outline-none">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="space-y-4">
              <Link to="/" className="block text-lg hover:text-blue-300 transition-colors" onClick={toggleMenu}>
                Trang Chủ
              </Link>
              <Link to="/category" className="block text-lg hover:text-blue-300 transition-colors" onClick={toggleMenu}>
                Danh Mục
              </Link>
              <Link to="/cart" className="block text-lg hover:text-blue-300 transition-colors" onClick={toggleMenu}>
                Giỏ Hàng {cartItems.length > 0 && `(${cartItems.length})`}
              </Link>
              <Link to="/wishlist" className="block text-lg hover:text-blue-300 transition-colors" onClick={toggleMenu}>
                Yêu Thích
              </Link>
              {user ? (
                <Link to="/profile" className="block text-lg hover:text-blue-300 transition-colors" onClick={toggleMenu}>
                  Tài khoản
                </Link>
              ) : (
                <>
                  <Link to="/login" className="block text-lg hover:text-blue-300 transition-colors" onClick={toggleMenu}>
                    Đăng Nhập
                  </Link>
                  <Link to="/register" className="block text-lg hover:text-blue-300 transition-colors" onClick={toggleMenu}>
                    Đăng Ký
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;